var myApp = angular.module('myApp', ['ngMessages', 'ngResource']);

myApp.controller('mainController',['$scope','$timeout', '$filter',(a,b,c)=>{
    a.name = 'Username';
    b(()=>a.name='Everybody',3000)
    a.handle="";
    a.lowercasehandle = () => c('lowercase')(a.handle)
}]);
