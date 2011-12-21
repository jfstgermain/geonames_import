csv = require "ya-csv"
mongodb = require "mongodb"
#db = new mongodb.Db("geonames", new mongodb.Server "127.0.0.1", 27017, {})
db = new mongodb.Db("meatme", new mongodb.Server "127.0.0.1", 27017, {})
# include only cities, boroughs & districts
interesting_feature_codes = ["PPL", "PPLA", "PPLA2", "PPLC", "PPLL", "PPLS", "ADMD", "ZN"]
#interesting_country_codes = ["CA", "US", "FR"]
interesting_country_codes = ["CA", "US"]

db.open (err, db) ->
  # Add US & CAN states / provinces
  #db.collection "states_dump", (err, states_dump) ->
  db.collection "states", (err, states) ->
    reader = csv.createCsvFileReader "./data/admin1CodesASCII.csv", {separator: "\t"}
    console.log "Starting states import"
     
    reader.addListener "data", (data) ->
      [state_code, state_name1, state_name2, geonameid] = data
      [state_code_prefix, state_code_suffix] = state_code.split(".")
      
      if state_code_prefix in interesting_country_codes
        doc =
          geonameid: geonameid
          name1: state_name1
          name2: state_name2
          state_code: state_code
        
        states.insert doc
          
    reader.addListener "end", ->
      console.log "Finished processing states CSV file"
 
      db.collection "regions", (err1, regions) ->
        regions.ensureIndex {geoloc: "2d"}, (err, indexName) ->
          reader = csv.createCsvFileReader "./data/CA.csv", {separator: "\t"}
          
          reader.addListener "end", ->
            console.log "Finished importing data..."
      
          reader.addListener "data", (data) ->
            counter = 0
            [geonameid, name, asciiname, alternatenames, latitude, longitude, feature_class, feature_code, country_code, cc2, admin1_code, admin2_code, admin3_code, admin4_code, population, elevation, gtopo30, timezone, modification_date] = data
      
            #if feature_code in interesting_feature_codes and "(historical)" not in name
            # If [ Feature code is a city, district, borough... ] Then [ action ]
            if feature_code in interesting_feature_codes and "(historical)" not in name
              # add the statename to the keywords array field
              ###
              statename = (not admin1_code.nil? and not states[admin1_code].nil?) ? states[admin1_code].downcase : nil
              alternatnames.gsub!(/\./,"")
              keywords = [name.downcase.split(" "),alternatenames.downcase.split(",").split(" "),admin1_code.downcase,admin2_code.downcase,admin3_code.downcase,admin4_code.downcase,statename].flatten.compact
              keywords.delete_if {|x| x == ""}
              keywords = keywords.flatten.uniq.sort
              ###
              admin1_code_full = "#{country_code}.#{admin1_code}"
              # set up the hash to be inserted into MongoDB
              states.find {state_code: admin1_code_full}, (err2, cursor) ->
                cursor.nextObject (err3, admin1_code_doc) ->
                  admin1_code_dbref = null

                  if not err? and admin1_code_doc?
                    admin1_code_dbref = new db.bson_serializer.DBRef "states", admin1_code_doc._id, "meatme"
                  else console.log "Couldn't find #{admin1_code_full} in States"
                  
                  doc =
                    geonameid: geonameid
                    name: name
                    country_code: country_code
                    feature_class: feature_class
                    feature_code: feature_code
                    admin1_code: admin1_code
                    admin2_code: admin2_code
                    timezone: timezone
                    state: admin1_code_dbref
                    geoloc:
                      lat: (Number) latitude
                      lon: (Number) longitude
                      
                  regions.insert doc
                  
