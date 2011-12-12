(function() {
  var counter, csv, db, interesting_feature_codes, mongodb;
  var __indexOf = Array.prototype.indexOf || function(item) {
    for (var i = 0, l = this.length; i < l; i++) {
      if (this[i] === item) return i;
    }
    return -1;
  };
  csv = require("ya-csv");
  mongodb = require("mongodb");
  db = new mongodb.Db("meatme", new mongodb.Server("127.0.0.1", 27017, {}));
  interesting_feature_codes = ["PPL", "PPLA", "PPLC", "PPLG", "PPLL", "PPLR", "PPLS", "STLMT", "PPLQ", "PPLW"];
  counter = 0;
  db.open(function(err, db) {
    return db.collection("test", function(err, collection) {
      var reader;
      reader = csv.createCsvFileReader("./data/CA.csv", {
        separator: "\t"
      });
      return reader.addListener("data", function(data) {
        var admin1_code, admin2_code, admin3_code, admin4_code, alternatenames, asciiname, cc2, country_code, doc, elevation, feature_class, feature_code, geonameid, gtopo30, latitude, longitude, modification_date, name, population, timezone;
        geonameid = data[0], name = data[1], asciiname = data[2], alternatenames = data[3], latitude = data[4], longitude = data[5], feature_class = data[6], feature_code = data[7], country_code = data[8], cc2 = data[9], admin1_code = data[10], admin2_code = data[11], admin3_code = data[12], admin4_code = data[13], population = data[14], elevation = data[15], gtopo30 = data[16], timezone = data[17], modification_date = data[18];
        if (__indexOf.call(interesting_feature_codes, feature_code) >= 0 && __indexOf.call(name, "(historical)") < 0) {
          /*
                  statename = (not admin1_code.nil? and not states[admin1_code].nil?) ? states[admin1_code].downcase : nil
                  alternatnames.gsub!(/\./,"")
                  keywords = [name.downcase.split(" "),alternatenames.downcase.split(",").split(" "),admin1_code.downcase,admin2_code.downcase,admin3_code.downcase,admin4_code.downcase,statename].flatten.compact
                  keywords.delete_if {|x| x == ""}
                  keywords = keywords.flatten.uniq.sort
                  */
          doc = {
            geonameid: geonameid,
            name: name,
            asciiname: asciiname,
            alternatenames: alternatenames,
            loc: {
              lat: Number(latitude),
              lng: Number(longitude)
            },
            feature_class: feature_class,
            feature_code: feature_code,
            country_code: country_code,
            cc2: cc2,
            admin1_code: admin1_code,
            admin2_code: admin2_code,
            admin3_code: admin3_code,
            admin4_code: admin4_code,
            population: population,
            elevation: elevation,
            gtopo30: gtopo30,
            timezone: timezone
          };
          return collection.insert(doc, function(doc) {
            counter = counter + 1;
            if (counter % 100000 === 0) {
              return console.log("" + counter);
            }
          });
        }
      });
    });
  });
}).call(this);
