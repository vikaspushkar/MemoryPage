var http = require('http'),
    express = require('express'),
    path = require('path');
 MongoClient = require('mongodb').MongoClient,
Server = require('mongodb').Server,
CollectionDriver = require('./collectionDriver').CollectionDriver;

var app = express();
app.set('port', process.env.PORT || 3000); 
app.set('views', path.join(__dirname, 'views')); //A
app.set('view engine', 'jade'); //B


//mongo db ---start

var mongoHost = 'localHost'; //A
var mongoPort = 27017; 
var collectionDriver;
console.log(" sab theek thaak h"); 
MongoClient.connect("mongodb://localhost:27017/test1", function(err,db)
{
//console.log(db);
//console.log(" pageid passed is " + pageid );
if(err) { return console.log(" the error is2 :  "  + err);}

  collectionDriver = new CollectionDriver(db);
console.log(" sab theek thaak h" + collectionDriver); //F
});

///mongdb ---end

 
app.use(express.static(path.join(__dirname, 'public')));
 
app.get('/:collection', function(req, res) { //A
   var params = req.params; //B
console.log(req.params.collection);
   collectionDriver.findAll(req.params.collection, function(error, objs) {
	 console.log(req.params.collection); //C
    	  if (error) { res.send(400, "page not founddd 1  " + error); } //D
	      else { 
	          if (req.accepts('html')) { //E
    	          res.render('data',{objects: objs, collection: req.params.collection}); //F
              } else {
	          res.set('Content-Type','application/json'); //G
                  res.send(200, objs); //H
              }
         }
   	});
});
 
app.get('/:collection/:entity', function(req, res) { //I
   var params = req.params;
   var entity = params.entity;
   var collection = params.collection;
   if (entity) {
       collectionDriver.get1(collection, entity, function(error, objs) { //J
          if (error) { res.send(400, error); }
          else { res.send(200, objs); } //K
       });
   } else {
      res.send(400, {error: 'bad url', url: req.url});
   }
}); 
app.use(function (req,res) {
    res.render('404', {url:req.url});
});
 
http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

