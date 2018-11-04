var myApp = angular.module('myApp', []);

myApp.controller('mainController', ($scope, $log, $filter) => {
   $scope.name = 'Raissa';
   $scope.formattedname = $filter('uppercase')($scope.name)

   $log.info($scope.name);
   $log.info($scope.formattedname);

});
