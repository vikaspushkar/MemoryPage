var SchemaOps = require('../../SchemaOps').SchemaOps;

//create an object to access object

ops = new SchemaOps();

angular.module('all-page-home',[])
	.controller('createpagecontroller', function ($scope){

		//console.log("@@@@@@@@@@@@@@@      @@@@@@@@");
		// Define utility functions

		//alert("you 1 selected other");

		$scope.createpage = function (){

			alert("you 2 selected other");
			console.log("@@@@@@@@@@@@@@@ ###########  @@@@@@@@");
			console.log( $scope.firstName + " " + $scope.lastName);
			var ID=Math.floor((Math.random() * 1000) + 1);
			var type = 0;
			//console.log(ops.pgadd(ID,$scope.pname,type, $scope.ocassion)); 
		}
	});
	/*.controller('all-page-ctlr1', function ($scope){

		console.log("@@@@@@@@@@@@@@@      @@@@@@@@");
		// Define utility functions

		alert("you 1 selected other");
		$scope.fetchpage = function (){

			alert("you 2 selected other");
			console.log("@@@@@@@@@@@@@@@ ###########  @@@@@@@@");
			//console.log( $scope.firstName + " " + $scope.lastName);
			//console.log(ops.pgadd(ID,$scope.pname,type, $scope.ocassion)); 
		}
	})*/


