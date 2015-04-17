/**
 * Created by roger creasy on 4/14/2015.
 * roger.creasy@gmail.com
 */

// Declare app level module which depends on filters, and services
var golfApp = angular.module('golfApp', [
    'ngSanitize',
    'ngRoute',
    'golfControllers'
]);

golfApp.config(['$routeProvider', function($routeProvider) {
        'use strict';
        $routeProvider.
        when('/', {
            templateUrl: 'partials/map.html',
            controller: 'MapCtrl'
        }).
        when('/details/:itemId', {
            templateUrl: 'partials/details.html',
            controller: 'MapCtrl'
        }).
        when('/rogercreasy', {
            templateUrl: 'partials/details.html',
            controller: 'MapCtrl'
        }).
        otherwise({
            redirectTo: '/'
        });
}]);
//create directive for map container
golfApp.directive('map',function(){
    return {
        link: function($scope, element) {
            var mapOptions = {
                zoom: 11,
                center: new google.maps.LatLng(36.095580028219, -79.444059371948242),
                mapTypeId: google.maps.MapTypeId.ROADMAP
            }

            $scope.map = new google.maps.Map(document.getElementById('map'), mapOptions);
        }
    }
});