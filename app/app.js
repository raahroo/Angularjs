var myApp = angular.module('myApp', []);

myApp.controller('mainController', function($scope) {
    console.log($scope)
    $scope.name = 'Raissa Hohenester';
    $scope.ocupation = 'Coder';
    $scope.getName = () => 'Raissa Hohenester';
});

