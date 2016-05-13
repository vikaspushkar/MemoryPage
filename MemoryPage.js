var 	http        	= require('http'),
	express     	= require('express'),
	bodyparser 	= require("body-parser"),
	path        	= require('path'),
	MongoClient    	= require('mongodb').MongoClient,
	Server          = require('mongodb').Server,
	SchemaInit      = require('./SchemaInit').SchemaInit,
	SchemaOps       = require('./SchemaOps').SchemaOps;




var app = express();
app.set('port', process.env.PORT || 3000); 
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs'); 

ops = new SchemaOps( this.MemoryPageDB);





app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyparser.json({ type: 'application/json' }));

console.log("Operation Page4 "); 


//Type:1-comment,2-Page,3-user

app.post('/Add/:Type',function(req, res) { 
		var param = req.body;
		var qry   = req.headers;
		var url   =req.url;
		console.log(req.body);
		//console.log(req);
		console.log("yaar tera karlega handle\n");
		if(req.params.Type == 1){
			ops.usradd(param.userid,0,param.username,param.emailid,param.mono, param.pwd );
		}
		if(req.params.Type == 3){
			console.log(url + " \n  hdjshjd \n ");
		//	console.log( req);
			ops.cmntadd(param.ID, param.UID, param.PID, param.Comment, param.Tagged, param.Reply, param.Like, param.Dislike, param.Type, 1122015 );
			}

		console.log("Add " + req.params.Type);
		res.status(200).send( " mnbvcxz dada");
		});


app.delete('/Del/:Type', function(req, res) { //A
		var param = req.body; //B

		console.log(" Delete " + req.params.Type);
		var retval= ops.cmntdel( param.Comment );
		res.status(200).send( retval + " qwertyu");
		});


app.put('/Update/:Type', function(req, res) { //A
		var param = req.body; //B
		console.log("Update " + req.params.Type);
		ops.cmntupdate(param.CommentID, param.UserID, param.PageID, param.Comment, param.Tagged, param.Reply, param.Like, param.Dislike, param.Type, param.Time );
		res.status(200).send( "121213 ");
		});





app.get('/Show/:Type', function(req, res) { //A
		var param = req.params; //B
		var output="No Result";
		console.log("ashiqui abb tum hi ho");
		console.log("Show " + req.params.Type);

		if (req.params.Type == '1' )
		{

		output = ops.usrshow(/*this.usercol,*/ 1);
		} 
		else if( req.params.Type == '2' )
		{

		output = ops.pgshow(1/*, this.pagecol*/);

		}
		else if( req.params.Type == '3' )
		{

			output = ops.cmntshow(res,1);//dummy id for now param.id);

		}
		//console.log("so wake me up when its all over" + output);
		//res.status(200).send(output);
});


app.get('/', function(req, res) { //A
		// var params = req.params; //B
		//console.log("Show " + req.params.Type);
		res.status(200);
		res.render('pages/index');

		});

app.get('/about', function(req, res) { //A
		// var params = req.params; //B
		//console.log("Show " + req.params.Type);
		res.status(200);
		res.render('pages/about');

		});

app.get('/signup', function(req, res) { //A
		// var params = req.params; //B
		//console.log("Show " + req.params.Type);
		res.render('pages/signup');
		res.status(200).send( " signup");
		});

app.get('/allpages', function(req, res) { //A
		console.log(" all pages query");
		res.render('pages/allpages');
		res.status(200).send(" pages");
		});


app.get('/pagehome/:pageid', function(req, res) { //A
		console.log(" all pages query");
		res.status(200);
		res.render('pages/pagehome');

		});


app.get('/login', function(req, res) { 
		res.status(200);
		res.render('pages/login');
		});

app.get('/login/cred', function(req, res) { 
		res.status(200);
		res.render('pages/login');
		console.log(req);
		});

app.get('/test', function(req, res) { //A
		//console.log(req);
		var name=req.query;
		console.log(name);
		res.status(200);
		res.render('pages/test');
		});


app.post('/create', function(req, res) { //A
		//console.log(req);
		var name=req.query;
		var nm=req.body.pname;
		var opt=req.body.ocassion;
		//ops.pgadd(891901, nm,0,opt);
		console.log("my request start ");
		console.log(nm);
		console.log(opt);
		console.log("my request end ");
		//console.log(name);
		res.status(200);
		res.render('pages/Success');
		});

app.use(function (req,res) {
		res.render('pages/404', {url:req.url});
		});

http.createServer(app).listen(app.get('port'), function(){
		console.log('Express server listening on port ' + app.get('port'));
		});

