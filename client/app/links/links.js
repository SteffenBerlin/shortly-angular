angular.module('shortly.links', ['shortly.services'])

.controller('LinksController', function ($scope, Links) {
  // Your code here
  $scope.data = Links.getAll().then(function(data){
    console.log("This is in the linksController: ", data); 
    console.log('test');
    $scope.data.links = data;
  });


  
});
