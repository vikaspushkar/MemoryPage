var app = angular.module('comment-page', ['ngRoute']);

app.factory('Auth', [function(){
  
 var commid = 0;
var serviceo ={
 autho : [{userid:891901, userauth:1}],
 commentid: commid

};
return serviceo;
}]);


/*
app.config([
'$stateProvider',
'$urlRouterProvider',
function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: '/home.html',
      controller: 'MainCtrl'
    });
.state('posts', {
  url: '/posts/{id}',
  templateUrl: '/posts.html',
  controller: 'PostsCtrl'
});
  $urlRouterProvider.otherwise('home');
}]);

*/
app.controller('commentcont', [
'$scope',
'Auth',
'http',
function($scope, Auth, http){


  $scope.Auth = Auth.serviceo;


$scope.incrementUpvotes = function(comment) {
  comment.like += 1;
}
$scope.incrementDownvotes = function(post) {
//if(comment.disklike > 0)
  comment.dislike -= 1;
}
$scope.addComment = function(){
 // if(!$scope.comment === '') { return; }

console.log(" in add comment function);
  var req = {
 method: 'GET',
 url: 'http://localhost:3000/3',
 headers: {
   'Content-Type': undefined
 },
 data: { ID: Auth.serviceo.commentid + 1, UID: 8919101 , PID: 1234 , Comment: $scope.comment, Tagged:[0] , Reply:[0],Like: 0 , Dislike: 0 , Type: 1 }
};

$http(req).then(

function(){
Auth.commid + = 1;
}, 

function(){
console.log(" failed ");
});


 $scope.comment = '';
}

$scope.addReply = function(){
  if(!$scope.title || $scope.title === '') { return; }
  var req = {
 method: 'GET',
 url: 'http://localhost:3000/3',
 headers: {
   'Content-Type': undefined
 },
 data: { test: 'test' }
}

$http(req).then(function(){
console.log(" success ");
}, 

function(){
console.log(" failed ");
});
  $scope.comment = '';
}

}]);



