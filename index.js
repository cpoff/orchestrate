var fs = require('fs'); 
var config = require('./config.js');
var db = require('orchestrate')(config.dbKey);

//fs.readFile('config.json', function(error, contents) {
//   config = JSON.parse(contents); 

db.put('collection', 'key', {
  "name": "Unkle Kracker",
  "hometown": "Portland, OR",
  "twitter": "@yomamma"
})
.then(function (res) {
  console.log(res.statusCode);
})
.fail(function (err) {});

db.list('jsi-test').then(function(res) {
    console.log(res.body.results);
}).fail(function(err) {});




for (i = 0; i < items.length; i++) {
   console.log(items[i]); 
}