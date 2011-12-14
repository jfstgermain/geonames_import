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
  db = new mongodb.Db("geonames", new mongodb.Server("127.0.0.1", 27017, {}));
  interesting_feature_codes = ["PPL", "PPLA", "PPLC", "PPLL", "PPLS"];
  interesting_country_codes = ["CA", "US", "FR"];
  db.open(function(err, db) {
    return db.collection("states_dump", function(err, states_dump) {
      return states_dump.createIndex([['state_code', 1]], function(indexErr, indexName) {
        var counter, reader;
        if (!(indexErr != null)) {
          counter = 0;
          reader = csv.createCsvFileReader("./data/admin1CodesASCII.csv", {
            separator: "\t"
          });
          reader.addListener("data", function(data) {
            var doc, geonameid, state_code, state_code_prefix, state_code_suffix, state_name1, state_name2, _ref;
            state_code = data[0], state_name1 = data[1], state_name2 = data[2], geonameid = data[3];
            _ref = state_code.split("."), state_code_prefix = _ref[0], state_code_suffix = _ref[1];
            if (__indexOf.call(interesting_country_codes, state_code_prefix) >= 0) {
              doc = {
                geonameid: geonameid,
                state_code: state_code,
                state_name1: state_name1,
                state_name2: state_name2
              };
              return states_dump.insert(doc, function(doc2) {
                counter++;
                if (counter % 1000 === 0) {
                  return console.log("" + counter);
                }
              });
            }
          });
          return reader.addListener("end", function() {
            return db.collection("countries_dump", function(err1, countries_dump) {
              reader = csv.createCsvFileReader("./data/CA.csv", {
                separator: "\t"
              });
              reader.addListener("data", function(data) {
                var admin1_code, admin1_code_full, admin2_code, admin3_code, admin4_code, alternatenames, asciiname, cc2, country_code, elevation, feature_class, feature_code, geonameid, gtopo30, latitude, longitude, modification_date, name, population, timezone;
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
                  return states_dump.find({
                    state_code: admin1_code_full
                  }, function(err2, cursor) {
                    return cursor.nextObject(function(err3, admin1_code_doc) {
                      var admin1_code_dbref, doc;
                      admin1_code_dbref = null;
                      counter = 0;
                      if (!(err != null) && (admin1_code_doc != null)) {
                        console.dir(admin1_code_doc);
                        admin1_code_dbref = new db.bson_serializer.DBRef("states_dump", admin1_code_doc._id, "geonames");
                      } else {
                        console.log("Couldn't find " + admin1_code_full + " in states_dump");
                      }
                      doc = {
                        geonameid: geonameid,
                        name: name,
                        loc: {
                          lat: Number(latitude),
                          lng: Number(longitude)
                        },
                        feature_class: feature_class,
                        feature_code: feature_code,
                        country_code: country_code,
                        cc2: cc2,
                        admin1_code: admin1_code,
                        admin1_code_dbref: admin1_code_dbref,
                        admin2_code: admin2_code,
                        admin3_code: admin3_code,
                        admin4_code: admin4_code,
                        population: population,
                        elevation: elevation,
                        gtopo30: gtopo30,
                        timezone: timezone
                      };
                      return countries_dump.insert(doc, function(doc) {
                        counter++;
                        if (counter % 1000 === 0) {
                          return console.log("" + counter);
                        }
                      });
                    });
                  });
                }
              });
              return reader.addListener("end", function() {
                return console.log("Finished importing records");
              });
            });
          });
        }
      });
    });
  });
}).call(this);
