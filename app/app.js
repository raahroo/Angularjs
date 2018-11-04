var myApp = angular.module('myApp', ['ngMessages']);

myApp.controller('mainController', ($scope, $log, $filter) => {
   $scope.name = 'Raissa';
   $scope.formattedname = $filter('uppercase')($scope.name)

   $log.info($scope.name);
   $log.info($scope.formattedname);

});
