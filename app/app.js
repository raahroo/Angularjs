var myApp = angular.module('myApp', ['ngMessages', 'ngResource']);

myApp.controller('mainController',['$scope','$log',(a, b) => {
    b.info(a);
}]);
