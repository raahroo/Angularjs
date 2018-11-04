var myApp = angular.module('myApp', []);

myApp.controller('mainController', function() {
});

var Person = function(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
}

function logPerson(person){
    console.log(person)
}

var john = new Person('Raissa', 'Hohenester');
logPerson(john);