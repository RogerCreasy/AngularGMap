/**
 * Created by roger creasy on 4/14/2015.
 * roger.creasy@gmail.com
 */

var golfApp = angular.module('golfApp', ['golfControllers', 'ngRoute']);

golfApp.config(function($routeProvider) {
    'use strict';
    $routeProvider
        .when('/home', {
            templateUrl: 'partials/home.html'
        })
        .when('/map', {
            templateUrl: 'partials/map.html'
        })
        .when('/', {
            templateUrl: 'partials/map.html'
        })
        .otherwise({
            redirectTo: '/map'
        });
});