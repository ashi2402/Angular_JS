var App = angular.module('myApp', ['ngRoute', 'calculatorServices']);

App.config(function($routeProvider) {
    $routeProvider
        .when('/main', {
            templateUrl: 'pages/main.html',

        })
        .when('/main/multiple', {
            templateUrl: 'pages/multiple.html',

        })
        .when('/main/contact', {
            templateUrl: 'pages/contact.html',

        })
        .when('/main/history', {
            templateUrl: 'pages/history.html',

        })
        .when('/main/fingerprint', {
            templateUrl: 'pages/fingerprint.html',

        })
        .when('/main/brain', {
            templateUrl: 'pages/brain.html',

        })
        .when('/main/mi-history', {
            templateUrl: 'pages/mi-history.html',

        })
        .when('/main/human-brain', {
            templateUrl: 'pages/human-brain.html',

        })
        .when('/main/mi', {
            templateUrl: 'pages/mi.html',

        })
        .when('/main/quotient', {
            templateUrl: 'pages/quotient.html',

        })
        .otherwise({
            redirectTo: '/main'
        });
});

var calculatorServices = angular.module('calculatorServices', []).service('calculator', function () {
    this.square = function (a) {
        return a*a;
    }
});









