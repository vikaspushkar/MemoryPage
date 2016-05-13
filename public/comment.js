// module and its dependancy list
var app = angular.module('comment-page', []);

//Service

app.factory('Auth', [function(){
  
 var commid = 0;
var serviceo ={
 userid:891901,
 userauth:1,
 commentid:commid
};
return serviceo;
}]);



//controller
app.controller('commentcont', [
'$scope',
'Auth',
'$http',
function($scope, Auth, $http){



$scope.userid   = Auth.userid;
$scope.userauth = Auth.userauth;
$scope.commid = Auth.commentid;


$scope.addComment = function(){
if(!$scope.comment === '') { return; }

  $scope.test1 = $scope.comment;

var req = {
 method: 'POST',
 url: 'http://localhost:3000/Add/3',
 headers: {
   'Content-Type': "application/json"
 },
 data: JSON.stringify({ID: Auth.commentid , UID: $scope.commid , PID: 1234 , Comment: $scope.comment, Tagged:[0] , Reply:[0],Like: 0 , Dislike: 0 , Type: 1})
};
$http(req).then(

function(){
Auth.commentid += 1;
console.log("sent the request" + req.data);
}, 

function(){
console.log(" failed ");
});


 $scope.comment = '';


}

$scope.getComment = function(){
if(!$scope.userauth === 0) { return; }

  $scope.test1 = "Hello!!! papagum";

var req = {
 method: 'GET',
 url: 'http://localhost:3000/Show/3',
 headers: {
   'Content-Type': "application/text"
 }
};
$http(req).then(

function(response){
$scope.commentlist = response.data;//=JSON.stringify(response.data);
console.log("Success Response revd : " + JSON.stringify($scope.commentlist) );

}, 

function(response){
console.log(" failed " + response);
});

}

$scope.addReply = function(comment)
{
console.log(comment+ "Add reply\n");

/*

var req = {
 method: 'POST',
 url: 'http://localhost:3000/Add/3',
 headers: {
   'Content-Type': "application/json"
 },
 data: JSON.stringify({ID: Auth.commentid , UID: $scope.commid , PID: 1234 , Comment: $scope.comment, Tagged:[0] , Reply:[0],Like: 0 , Dislike: 0 , Type: 1})
};
$http(req).then(

function(){
Auth.commentid += 1;
console.log("sent the request" + req.data);
}, 

function(){
console.log(" failed ");
});


*/



}

$scope.incrementUpvotes = function(comment) {

console.log(comment + "incrementUpvotes ");

  comment.Like += 1;
var req = {
 method: 'PUT',
 url: 'http://localhost:3000/Update/3',
 headers: {
   'Content-Type': "application/json"
 },
 data: JSON.stringify(comment)
};
$http(req).then(

function(){
console.log("sent the request" + req.data);
}, 

function(){
  comment.Like -= 1;
console.log(" failed ");
});
}
$scope.incrementDownvotes = function(comment) {
console.log(comment + "incrementDownvotes");
//if(comment.Disklike > 0)
  comment.Dislike += 1;

var req = {
 method: 'PUT',
 url: 'http://localhost:3000/Update/3',
 headers: {
   'Content-Type': "application/json"
 },
 data: JSON.stringify(comment)
};
$http(req).then(

function(){
console.log("sent the request" + req.data);
}, 

function(){
  comment.Dislike -= 1;
console.log(" failed ");
});


}

$scope.deleteComment = function(comment) {
var req = {
 method: 'DELETE',
 url: 'http://localhost:3000/Del/3',
 headers: {
   'Content-Type': "application/json"
 },
 data: JSON.stringify(comment)
};
$http(req).then(

function(){
console.log("sent the request" + req.data);
}, 

function(){
  comment.Dislike -= 1;
console.log(" failed ");
});
}

}]);



