/**
 * Created by roger creasy on 4/14/2015.
 * roger.creasy@gmail.com
 */

//Angular App Module and Controller
var golfApp = angular.module('golfApp', []);
    golfApp.controller('MapCtrl', function ($scope, $http) {

        $http.get('data/places.json').success(function(data) {
            $scope.places = data;

        var mapOptions = {
            zoom: 11,
            center: new google.maps.LatLng(36.095580028219, -79.444059371948242),
            mapTypeId: google.maps.MapTypeId.ROADMAP
        }

        $scope.map = new google.maps.Map(document.getElementById('map'), mapOptions);

        $scope.markers = [];

        var infoWindow = new google.maps.InfoWindow();

        var createMarker = function (info){

            if (info.locationType == 'course'){
                var img = 'img/pin.png';
            }
            if (info.locationType == 'biz'){
                var img = 'img/storefront.png';
            }
            if (info.locationType == 'nichols'){
                var img = 'img/logoNichols-sm.png';
            }
            //TODO add other location types, perhaps a switch statement

            var marker = new google.maps.Marker({
                map: $scope.map,
                position: new google.maps.LatLng(info.lat, info.long),
                title: info.place,
                icon: img
            });
            marker.content = '<div>' +
                    info.desc +
                    '<br />' +
                    '<a href="tel:+1' + info.phone + '">' + info.phone +
            '</div>';

            google.maps.event.addListener(marker, 'click', function(){
                infoWindow.setContent('<h4>' + marker.title + '</h4>' + marker.content);
                infoWindow.open($scope.map, marker);
            });

            $scope.markers.push(marker);

        }

        for (i = 0; i < $scope.places.length; i++){
            createMarker($scope.places[i]);
        }

        google.maps.Map.prototype.clearMarkers = function() {
            if (infoWindow) {
                infoWindow.close();
            }
        }

        $scope.openInfoWindow = function(e, selectedMarker){
            e.preventDefault();
            google.maps.event.trigger(selectedMarker, 'click');
            $scope.map.setCenter(selectedMarker.internalPosition);
            $scope.map.setZoom(16);

        }

        $scope.restartMap = function(e){
            e.preventDefault();
            $scope.map.clearMarkers();
            $scope.map.setCenter({lat:36.095580028219, lng:-79.444059371948242});
            $scope.map.setZoom(11);
        }


    });
    });
