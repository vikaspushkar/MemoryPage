var fckmanager = function(namee)
{
        this.serviceinstance=namee;
};

fckmanager.prototype.fuckit = function ()
{
	return "I  am " + this.serviceinstance.yourfirstName + " " + this.serviceinstance.yourlastName + " fucking " + this.serviceinstance.herfirstName + " "+ this.serviceinstance.herlastName  + " so bad";
};




angular.module('my123App',[]).value("employee",{ address: " ", company:" "}).value("namee",{ yourfirstName: " ",yourlastName:"" ,herfirstName : " ", herlastName: " "}).service("fckmanager", fckmanager).controller('my123controller', function ($scope)
{
  // Initialize the model variables
  $scope.firstName = "marina";
  $scope.lastName = "Doe";

  // Define utility functions
  $scope.getFullName = function ()
  {
    return $scope.firstName + " " + $scope.lastName;
  }
}).controller('my124controller', function ($scope){

// Initialize the model variables
  $scope.firstName = "marina";
  $scope.middleName = "jacobe";
  $scope.lastName = "Doe";
// Define utility functions
  $scope.getFullName1 = function ()
  {
    return $scope.firstName + " " + $scope.middleName +" "+ $scope.lastName;
  }

}).controller("my125controller", function($scope,employee ){ 
employee.address="marathalli";
employee.company="Cisco Systems";
$scope.myinstance=employee; 
}
).controller('my126controller', function($scope,namee, employee, fckmanager){ 
employee.address="marathalli";
employee.company="Cisco Systems";
namee.yourfirstName= "vikas ";
namee.yourlastName="pushkar";
namee.herfirstName = "lisa ";
namee.herlastName= " ann";
$scope.namee=namee;
$scope.myinstance=employee;
$scope.service=fckmanager;
 });


