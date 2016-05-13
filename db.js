
var http = require('http');
http.createServer(function (req, res) {
//add_comment("21213", "vikas","my comment");
  res.writeHead(200, {'Content-Type': 'text/plain'});
var pageid=2121;
var MongoClient = require('mongodb').MongoClient;
MongoClient.connect("mongodb://localhost:27017/test1", function(err,db)
{
//console.log(db);
//console.log(" pageid passed is " + pageid );
if(err) { return console.log(" the error is2 :  "  + err);}

var col = db.collection('cmnt');
var cursor =col.find().toArray(function(err,items){ if(err) {return console.log("error ");} console.log(items); 
res.end('Hello World\n'+ items[0].Page  + items[0].User + items[0].Comment + "  hmmm \n ");
return items});
});
  //res.end('Hello World\n'+ get_comment("2121") + "  hmmm \n ");
}).listen(8080, '127.0.0.1');
console.log('Server running at http://127.0.0.1:8080/');



function add_comment(pageid,userid, comment) 
{
var MongoClient = require('mongodb').MongoClient;

MongoClient.connect("mongodb://localhost:27017/test1", function(err, db) {
  if(err) { return console.log(" the error is 1:  "  + err); }
console.log(db);
  var collection = db.collection('cmnt');
  var docs = [{Page:pageid, User:userid, Comment:comment}];

  collection.insert(docs,  {w:1}, function(err, result)  { return console.log("added")});

});
}


function get_comment(pageid )
{
	var MongoClient = require('mongodb').MongoClient;
MongoClient.connect("mongodb://localhost:27017/test1", function(err,db)
{
//console.log(db);
console.log(" pageid passed is " + pageid );
if(err) { return console.log(" the error is2 :  "  + err);}

var col = db.collection('cmnt');
var cursor =col.find({Page:pageid}).toArray(function(err,items){ if(err) {return console.log("error ");} console.log(items); return items});
//console.log("----------------------------------------------------------");
//console.log(col);
//while(cursor.hasNext()){
    //console.log(cursor);
//}
}
);}



