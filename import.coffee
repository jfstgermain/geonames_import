csv = require "ya-csv"
mongodb = require "mongodb"
db = new mongodb.Db("geonames", new mongodb.Server "127.0.0.1", 27017, {})
# include only cities, boroughs & districts
interesting_feature_codes = ["PPL", "PPLA", "PPLC", "PPLL", "PPLS"]
interesting_country_codes = ["CA", "US", "FR"]

db.open (err, db) ->
  # Add US & CAN states / provinces
  db.collection "states_dump", (err, states_dump) ->
    states_dump.createIndex [['state_code', 1]], (indexErr, indexName) ->
      if not indexErr?
        counter = 0
        reader = csv.createCsvFileReader "./data/admin1CodesASCII.csv", {separator: "\t"}
        reader.addListener "data", (data) ->
          [state_code, state_name1, state_name2, geonameid] = data
          [state_code_prefix, state_code_suffix] = state_code.split(".")
        
          if state_code_prefix in interesting_country_codes
            doc =
              geonameid: geonameid
              state_code: state_code
              state_name1: state_name1
              state_name2: state_name2
          
            states_dump.insert doc, (doc2) ->
              counter++
              console.log "#{counter}" if counter % 1000 is 0
            
        reader.addListener "end", ->
          # if state_code 
          # Import cities with population > 1000
          # Need to include districts also not just cities
          db.collection "countries_dump", (err1, countries_dump) ->
            reader = csv.createCsvFileReader "./data/CA.csv", {separator: "\t"}
            reader.addListener "data", (data) ->
              [geonameid, name, asciiname, alternatenames, latitude, longitude, feature_class, feature_code, country_code, cc2, admin1_code, admin2_code, admin3_code, admin4_code, population, elevation, gtopo30, timezone, modification_date] = data
        
              #if feature_code in interesting_feature_codes and "(historical)" not in name
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
                states_dump.find {state_code: admin1_code_full}, (err2, cursor) ->
                  cursor.nextObject (err3, admin1_code_doc) ->
                    admin1_code_dbref = null
                    counter = 0

                    if not err? and admin1_code_doc?
                      admin1_code_dbref = new db.bson_serializer.DBRef "states_dump", admin1_code_doc._id, "geonames"
                    else console.log "Couldn't find #{admin1_code_full} in states_dump"
                      
                    doc =
                      geonameid: geonameid
                      name: name
                      loc:
                        lat: (Number) latitude
                        lng: (Number) longitude
                      feature_class: feature_class
                      feature_code: feature_code
                      country_code: country_code
                      cc2: cc2
                      admin1_code: admin1_code
                      admin1_code_dbref: admin1_code_dbref
                      admin2_code: admin2_code
                      admin3_code: admin3_code
                      admin4_code: admin4_code
                      population: population
                      elevation: elevation
                      gtopo30: gtopo30
                      timezone: timezone
                      
                    countries_dump.insert doc, (doc) ->
                      counter++
                      console.log "#{counter}" if counter % 1000 == 0

            reader.addListener "end", ->
              console.log "Finished importing records"

