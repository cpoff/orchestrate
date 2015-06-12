var fs = require('fs'); 
var config = require('./config.js');<div class="input-group">
  <span class="input-group-addon">$</span>
  <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)">
  <span class="input-group-addon">.00</span>
</div>
var db = require('orchestrate')(config.dbKey);

//fs.readFile('config.json', function(error, contents) {
//   config = JSON.parse(contents); 

//db.put('collection', 'key', {
//  "name": "Unkle Kracker",
//  "hometown": "Portland, OR",
//  "twitter": "@yomamma"
//})
//.then(function (res) {
//  console.log(res.statusCode);
//})
//.fail(function (err) {});

db.list('jsi-test').then(function(res) {
    console.log(res.body.results);
}).fail(function(err) {});


