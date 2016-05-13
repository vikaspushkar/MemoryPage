var mongoose = require('mongoose');
var SchemaPkg = require('./SchemaInit').SchemaInit;


schema =  new SchemaInit();



SchemaOps = function(schematype){
if (schematype === '1' )
{
	this.add   = UserAdd;
	this.del   = UserdDel;
	this.update= UserUp;
	this.show  = UserShow;
} 
else if( schematype === '2' )
{
	this.add   = PageAdd;
	this.del   = PagedDel;
	this.update= PageUp;
	this.show  = PageShow;
}
else if( schematype === '3' )
{
	this.add   = CommentAdd;
	this.del   = CommentdDel;
	this.update= CommentUp;
	this.show  = CommentShow;
}

};


//// User 

UserAdd = function(ID,Type,Name,Email,MoNo)
{
	console.log(" useradd ");
};

UserDel = function( ID )
{
	console.log(" userdel ");
};

UserUp = function( UpID, ID,Type,Name,Email,MoNo )
{
	console.log(" userupdate ");
};

UserShow = function( ID )
{
	console.log(" usershow ");
};

////Page


PageAdd = function(ID, Title, Type, EventType)
{
	console.log(" pageadd ");
};

PageDel = function( ID )
{
	console.log(" pagedel ");
};
PageUp = function(UpID, ID, Title, Type, EventType)
{
	console.log(" pageup ");
};
PageShow = function( ID )
{
	console.log(" pageshow ");
};

//////comment

CommentAdd = function(ID, UID, PID, Comment, Tagged, Reply,Like, Dislike, Type, time)
{
	console.log(" commentadd ");
};

CommentDel = function( ID )
{
	console.log(" commentdel ");
};
CommentUp = function(UpID ,ID, UID, PID, Comment, Tagged, Reply,Like, Dislike, Type, time )
{
	console.log(" commentup ");
};

CommentDel = function( ID )
{
	console.log(" commentshow ");
};

///export schema object

 exports.SchemaOps = SchemaOps;

