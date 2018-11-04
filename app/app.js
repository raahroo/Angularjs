var myApp = angular.module('myApp', []);

myApp.controller('mainController', ($scope, $log) => {
    $log.log("Hello");
    $log.info("Info");
    $log.warn("Warning!");
    $log.debug("Some debug information while writing code");
    $log.error("Error = () => err");
});


const searchEmployee = (firstName, lastName, height, age, occupation) => 'Raissa H.'


console.log(angular.injector().annotate(searchEmployee));