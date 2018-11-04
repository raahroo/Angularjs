var myApp = angular.module('myApp', ['ngMessages', 'ngResource']);

myApp.controller('mainController',['$scope','$timeout',(a,b)=>{
    a.name = 'Username';
    b(()=>a.name='Everybody',3000)
}]);
