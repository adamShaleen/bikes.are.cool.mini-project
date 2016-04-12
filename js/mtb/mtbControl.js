angular.module('selfLearning').controller('mtbControl', function($scope, $stateParams, mtbService) {

$scope.displayMtbData = mtbService.getMtbData();


});
