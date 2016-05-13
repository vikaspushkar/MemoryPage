angular.module('page-home',[]).value("Page",{ name: " ", like:" ", dislike:" "}).value("cmnt",{ user: " ",data:"" }).controller('pmm-ctlr1', function ($scope,Page,cmnt)
{
  // Define utility functions
  $scope.getFullName = function ()
  {
    return $scope.firstName + " " + $scope.lastName;
  }
})
