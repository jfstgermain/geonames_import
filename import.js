(function() {
  var csv, db, interesting_country_codes, interesting_feature_codes, mongodb;
  var __indexOf = Array.prototype.indexOf || function(item) {
    for (var i = 0, l = this.length; i < l; i++) {
      if (this[i] === item) return i;
    }
    return -1;
  };
  csv = require("ya-csv");
  mongodb = require("mongodb");
  db = new mongodb.Db("meatme", new mongodb.Server("127.0.0.1", 27017, {}));
  interesting_feature_codes = ["PPL", "PPLA", "PPLA2", "PPLC", "PPLL", "PPLS", "ADMD", "ZN"];
  interesting_country_codes = ["CA", "US"];
  db.open(function(err, db) {
    return db.collection("states", function(err, states) {
      var reader;
      reader = csv.createCsvFileReader("./data/admin1CodesASCII.csv", {
        separator: "\t"
      });
      console.log("Starting states import");
      reader.addListener("data", function(data) {
        var doc, geonameid, state_code, state_code_prefix, state_code_suffix, state_name1, state_name2, _ref;
        state_code = data[0], state_name1 = data[1], state_name2 = data[2], geonameid = data[3];
        _ref = state_code.split("."), state_code_prefix = _ref[0], state_code_suffix = _ref[1];
        if (__indexOf.call(interesting_country_codes, state_code_prefix) >= 0) {
          doc = {
            geonameid: geonameid,
            name1: state_name1,
            name2: state_name2,
            state_code: state_code
          };
          return states.insert(doc);
        }
      });
      return reader.addListener("end", function() {
        console.log("Finished processing states CSV file");
        return db.collection("regions", function(err1, regions) {
          return regions.ensureIndex({
            geoloc: "2d"
          }, function(err, indexName) {
            reader = csv.createCsvFileReader("./data/CA.csv", {
              separator: "\t"
            });
            reader.addListener("end", function() {
              return console.log("Finished importing data...");
            });
            return reader.addListener("data", function(data) {
              var admin1_code, admin1_code_full, admin2_code, admin3_code, admin4_code, alternatenames, asciiname, cc2, counter, country_code, elevation, feature_class, feature_code, geonameid, gtopo30, latitude, longitude, modification_date, name, population, timezone;
              counter = 0;
              geonameid = data[0], name = data[1], asciiname = data[2], alternatenames = data[3], latitude = data[4], longitude = data[5], feature_class = data[6], feature_code = data[7], country_code = data[8], cc2 = data[9], admin1_code = data[10], admin2_code = data[11], admin3_code = data[12], admin4_code = data[13], population = data[14], elevation = data[15], gtopo30 = data[16], timezone = data[17], modification_date = data[18];
              if (__indexOf.call(interesting_feature_codes, feature_code) >= 0 && __indexOf.call(name, "(historical)") < 0) {
                /*
                              statename = (not admin1_code.nil? and not states[admin1_code].nil?) ? states[admin1_code].downcase : nil
                              alternatnames.gsub!(/\./,"")
                              keywords = [name.downcase.split(" "),alternatenames.downcase.split(",").split(" "),admin1_code.downcase,admin2_code.downcase,admin3_code.downcase,admin4_code.downcase,statename].flatten.compact
                              keywords.delete_if {|x| x == ""}
                              keywords = keywords.flatten.uniq.sort
                              */
                admin1_code_full = "" + country_code + "." + admin1_code;
                return states.find({
                  state_code: admin1_code_full
                }, function(err2, cursor) {
                  return cursor.nextObject(function(err3, admin1_code_doc) {
                    var admin1_code_dbref, doc;
                    admin1_code_dbref = null;
                    if (!(err != null) && (admin1_code_doc != null)) {
                      admin1_code_dbref = new db.bson_serializer.DBRef("states", admin1_code_doc._id, "meatme");
                    } else {
                      console.log("Couldn't find " + admin1_code_full + " in States");
                    }
                    doc = {
                      geonameid: geonameid,
                      name: name,
                      country_code: country_code,
                      feature_class: feature_class,
                      feature_code: feature_code,
                      admin1_code: admin1_code,
                      admin2_code: admin2_code,
                      timezone: timezone,
                      state: admin1_code_dbref,
                      geoloc: [Number(longitude), Number(latitude)]
                    };
                    return regions.insert(doc);
                  });
                });
              }
            });
          });
        });
      });
    });
  });
}).call(this);
