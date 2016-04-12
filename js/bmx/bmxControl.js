angular.module('selfLearning').controller('bmxControl', function($scope, $stateParams, bmxService) {

$scope.displayBmxData = bmxService.getBmxData();

});
