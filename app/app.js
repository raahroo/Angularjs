var myApp = angular.module('myApp', ['ngMessages', 'ngResource']);

myApp.controller('mainController',['$scope','$timeout', '$filter',(a,b,c)=>{
    a.name = 'Username';
    b(()=>a.name='Everybody',3000)
    a.handle="";
    a.lowercasehandle = () => c('lowercase')(a.handle);
    a.$watch('handle', (newValue, oldValue) => {
        console.info('Changed');
        console.log('Old:' + oldValue);
        console.log('New:'+ newValue)
    })
    b(() => {
        a.handle = 'newtwitterhandle';
        console.log('Scope changed!');
    }, 3000)
}]);
