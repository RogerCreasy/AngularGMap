/**
 * Created by roger creasy on 4/14/2015.
 * roger.creasy@gmail.com
 */

var golfApp = angular.module('golfApp', [
    'ngRoute',
    'golfControllers'
]);

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

golfApp.directive('mapCanvas', function() {
    return {
        link: function(scope, element) {
            var mapOptions = {
                zoom: 11,
                center: new google.maps.LatLng(36.095580028219, -79.444059371948242),
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };
            map = new google.maps.Map(document.getElementById('map-canvas'),
                mapOptions);
        }
    };
});
