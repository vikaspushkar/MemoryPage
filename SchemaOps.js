var mongoose = require('mongoose');
var SchemaPkg = require('./SchemaInit').SchemaInit;

///init 

///   Constructor///


SchemaOps = function(){

};

schema =  new SchemaInit();


////// USer Add

SchemaOps.prototype.usradd   = function(/*col,*/ID,type,name,email,mobileNo,passwd)
{
	console.log(" useradd ");
	var userentry =new (schema.getUsercolSchema())({UserID: ID,
			Type: type, //1= Non-Admin / 0= Admin
			Name: name,
			EmailID: email,
			MoNo: mobileNo,
			Passwd: passwd});

	//add it

	userentry.save(function(err){
			if(err)
			console.log("user add error: " +err );
			else
			console.log(userentry);
			});


	console.log("added");
	return "added";


};

//////USer Delete ////////


SchemaOps.prototype.usrdel   = function( /* db,*/ ID )
{
	console.log(" userdel ");


	(schema.getUsercolSchema()).remove({ UserID: ID }, function (err) {
			if (err) return handleError("Remov Error: " +err);
			console.log(' removed ');

			});

};

////// User Update////////


SchemaOps.prototype.usrupdate= function( /*db, */UpID, ID,type,name,email,mono ,passwd)
{
	console.log(" userupdate ");

	(schema.getUsercolSchema()).update({ UserID: UpID},{ UserID: ID, Type: type, Name:name,EmailID:email, MoNo: mono, Passwd: passwd }, { multi: true }, function (err, numberAffected, raw) {
			if (err) return handleError(err);
			console.log('The number of updated documents was %d', numberAffected);
			console.log('The raw response from Mongo was ', raw);
			});


};

////////  User Show ////////////
SchemaOps.prototype.usrshow  = function(/*col,*/  ID )

{

	console.log(" usershow ");
	(schema.getUsercolSchema()).find(function (err, USER) {
			if (err) return console.error(err);
			console.log(USER)
			});

};
console.log("Operations User ");



SchemaOps.prototype.pgadd   = function(/*db,*/ ID, title, type, eventType)
{
	console.log(" pageadd ");

	var pageentry =new (schema.getpagecolSchema())({PageID: ID,
			Title: title,
			Type: type, //1= paid / 0= free
			Comment: 0,
			Like:0,
			EventType: eventType});

	//add it

	pageentry.save(function(err){
			if(err)
			console.log("page add error: " +err );
			else
			console.log(pageentry);
			});


	console.log("added");
	return "added";

};
SchemaOps.prototype.pgdel   = function( /*db,*/ ID )
{
	console.log(" pagedel ");

	(schema.getpagecolSchema()).remove({ PageID: ID }, function (err) {
			if (err) {return handleError("Page Remove Error: " +err);
			console.log(' removed ');}
			else
			{
			return "removed";
			}
			});

};



SchemaOps.prototype.pgupdate = function(/*db,*/ UpID, ID, Title, Type, EventType)
{
	console.log(" pageup ");
};




SchemaOps.prototype.pgshow = function(/* db,*/ ID )
{
	console.log(" pageshow ");
	//not using ID right now
	(schema.getpagecolSchema()).find(function (err, Page) {
			if (err) return console.error(err);
			console.log(Page);
			return Page;
			});



};
console.log("Operation Page ");





SchemaOps.prototype.cmntadd = function(ID, UID, PID, comment, tagged, reply,like, dislike, type, time)
{

	console.log(" commentadd ");
	console.log(ID+"\t"+ UID+"\t"+ PID+"\t"+ comment+"\t"+ tagged+"\t"+ reply+"\t"+like+"\t"+ dislike+"\t"+ type +"\t"+ time);


var commententry =new (schema.getcommentcolSchema())({	CommentID: ID,
							UserID: UID,
							PageID: PID,
							Comment: comment,
							Tagged: tagged,
							Reply:  reply,
							Like:    like,
							Dislike: dislike,
							Type:type,//1= Comment , 0= Reply,
							Time: time,
						     });

	//add it

	commententry.save(function(err){
			if(err)
			console.log("page add error: " +err );
			else
			console.log(commententry);
			console.log("yo yo ");
			});


	console.log("comment added");
	return "added";
};
console.log("Operation Page 1 ");
SchemaOps.prototype.cmntdel    = function(comment )
{
	console.log(" commentdel "+ comment);

	(schema.getcommentcolSchema()).remove({ Comment: comment }, function (err) {
			if (err) {return handleError("Page Remove Error: " +err);
			console.log(' remove error');}
			else
			{
			return "removed";
			}
			});

};
SchemaOps.prototype.cmntupdate = function(ID, UID, PID, Comment, Tagged, Reply,Like, Dislike, Type, Time )
{
	console.log(" commentup ");
	console.log(ID+"\t"+ UID+"\t"+ PID+"\t"+ Comment+"\t"+ Tagged+"\t"+ Reply+"\t"+Like+"\t"+ Dislike+"\t"+ Type +"\t"+ Time);

(schema.getcommentcolSchema()).update({Comment: Comment},{ID:ID, UID:UID, PID:PID, Comment:Comment, Tagged:Tagged, Reply:Reply,Like:Like, Dislike:Dislike, Type:Type, Time:Time},function(err, result){if(err) return err; console.log("all good commander");});


};
console.log("Operation Page 2 ");
 


SchemaOps.prototype.cmntshow = function(Res, ID )
{



	console.log(" commentshow " + ID );


(schema.getcommentcolSchema()).find(function (err, Page) {
			if (err) return Res.status(200).send("Opps!!! what did you ask??");
			console.log("oohoo" + Page);
			Res.status(200).send(Page);
			return JSON.stringify(Page);
			});

	//return " I am returing from commentshow";
};


exports.SchemaOps = SchemaOps;

