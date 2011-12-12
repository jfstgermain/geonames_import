csv = require "../lib/csv"
mongodb = require "mongodb"
db = new mongodb.Db("meatme", new mongodb.Server "127.0.0.1", 27017, {})

db.open (err, db) ->
  db.collection "test", (err, collection) ->
    csv.each("../data/CA.csv").addListener "data", (data) ->


