# Inspired by https://github.com/richcorbs/Geonames-in-Mongo/blob/master/import_allCountries_to_mongo.rb
csv = require "ya-csv"
mongodb = require "mongodb"
db = new mongodb.Db("meatme", new mongodb.Server "127.0.0.1", 27017, {})
interesting_feature_codes = ["PPL", "PPLA", "PPLC", "PPLG", "PPLL", "PPLR", "PPLS", "STLMT", "PPLQ", "PPLW"]
counter = 0

db.open (err, db) ->
  db.collection "test", (err, collection) ->
    reader = csv.createCsvFileReader "./data/CA.csv", {separator: "\t"}
    reader.addListener "data", (data) ->
      [geonameid, name, asciiname, alternatenames, latitude, longitude, feature_class, feature_code, country_code, cc2, admin1_code, admin2_code, admin3_code, admin4_code, population, elevation, gtopo30, timezone, modification_date] = data

      if feature_code in interesting_feature_codes and "(historical)" not in name
        # add the statename to the keywords array field
        ###
        statename = (not admin1_code.nil? and not states[admin1_code].nil?) ? states[admin1_code].downcase : nil
        alternatnames.gsub!(/\./,"")
        keywords = [name.downcase.split(" "),alternatenames.downcase.split(",").split(" "),admin1_code.downcase,admin2_code.downcase,admin3_code.downcase,admin4_code.downcase,statename].flatten.compact
        keywords.delete_if {|x| x == ""}
        keywords = keywords.flatten.uniq.sort
        ###
        # set up the hash to be inserted into MongoDB
        doc = 
          geonameid: geonameid
          name: name
          asciiname: asciiname
          alternatenames: alternatenames
          loc: 
            lat: (Number) latitude
            lng: (Number) longitude
          feature_class: feature_class
          feature_code: feature_code
          country_code: country_code
          cc2: cc2
          admin1_code: admin1_code
          admin2_code: admin2_code
          admin3_code: admin3_code
          admin4_code: admin4_code
          population: population
          elevation: elevation
          gtopo30: gtopo30
          timezone: timezone
          
        collection.insert doc, (doc) ->
          counter = counter + 1
          console.log "#{counter}" if counter % 100000 == 0
