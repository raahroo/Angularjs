var myApp = angular.module('myApp', ['ngMessages', 'ngResource']);

myApp.controller('mainController', ($scope, $log, $filter, $resource) => {
   $scope.name = 'Raissa';
   $scope.formattedname = $filter('uppercase')($scope.name)

   $log.info($scope.name);
   $log.info($scope.formattedname);

   console.log($resource)

});
