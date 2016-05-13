var http = require('http');
var    express = require('express');
var    path = require('path');




SchemaInit = function() 
{
	//mongo db ---start
	this.mongoose = require('mongoose');

	this.mongoose.connect("mongodb://localhost:27017/MemPage");


	var CommentColSchema = new this.mongoose.Schema({
CommentID: Number,
UserID: Number,
PageID: Number,
Comment: String,
Tagged: [Number],//UID of tagged users
Reply:  [Number],//if Type  1 = CID of post which are reply to this comment if Type 0 CID of post for which this is 
Like:Number,
Dislike: Number,
Type:Boolean,//1= Comment , 0= Reply,
Time: Date,
});

var PageColSchema = new this.mongoose.Schema({
PageID: Number,
Title: String,
Type: Boolean, //1= paid / 0= free
Comment: String,
Like:Number,
EventType: Number,//1=Birthday,2=Farewell, 3 =Welcome,4= Misc
});

var UserColSchema = new this.mongoose.Schema({
UserID: Number,
Type: Boolean, //1= Non-Admin / 0= Admin
Name: String,
EmailID: String,
MoNo:[Number] ,
Passwd: String,
});


var CommentCol = this.mongoose.model('CommentCol', CommentColSchema);
var PageCol    = this.mongoose.model('PageCol', PageColSchema);
var UserCol    = this.mongoose.model('UserCol', UserColSchema);
this.CommentCol = CommentCol;
this.PageCol = PageCol;
this.UserCol = UserCol;
console.log(" Schema is initialized ");
};

///get the mongoose ///////


SchemaInit.prototype.getMongoose = function(){
	return this.mongoose;
};



///get the Comment collection ///////


SchemaInit.prototype.getcommentcolSchema = function(){
	return this.CommentCol;
};

///get the page collection ///////


SchemaInit.prototype.getpagecolSchema = function(){
	return this.PageCol;
};


///get the User collection ///////


SchemaInit.prototype.getUsercolSchema = function(){
	return this.UserCol;
};


exports.SchemaInit = SchemaInit;
