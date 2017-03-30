app.controller('mainController', function($scope, factory) {

  $scope.location = factory.getLocationApi.location;
  $scope.titles = factory.titles;

$scope.getLocationApi = function(location){
  console.log("im in ctrler");
  console.log(location);
  factory.getLocationApi(location);
};


});
