var http = require('http');
var    express = require('express');
var    path = require('path');

var mongoose = require('mongoose');



 var CommentColSchema = new mongoose.Schema({
  CommentID: Number,
  UserID: Number,
  PageID: Number,
  Comment: String,
  Tagged: [Number],
  Reply:  [String],
  Like:Number,
  Dislike: Number,
  Type:Boolean,//1= Comment , 0= Reply,
  Time: Date,
});

var PageColSchema = new mongoose.Schema({
  PageID: Number,
  Title: String,
  Type: Boolean, //1= paid / 0= free
  Comment: String,
  EventType: Number,//1=Birthday,2=Farewell, 3 =Welcome,4= Misc
  });

var UserColSchema = new mongoose.Schema({
  UserID: Number,
  Type: Boolean, //1= Non-Admin / 0= Admin
  Name: String,
  EmailID: String,
  MoNo: [{type: Number, max:9}],
  });

SchemaInit = function() 
{
var CommentCol = mongoose.model('CommentCol', CommentColSchema);
var PageCol = mongoose.model('PageCol', PageColSchema);
var UserCol = mongoose.model('UserCol', UserColSchema);
  this.CommentCol = CommentCol;
  this.PageCol = PageCol;
  this.UserCol = UserCol;
};

 exports.SchemaInit = SchemaInit;
