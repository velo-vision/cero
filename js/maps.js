var styles = [
  {
     "featureType": "all",
     "elementType": "all",
     "stylers": [
         {
             "visibility": "on"
         },
         {
             "saturation": "10"
         }
     ]
 },
 {
     "featureType": "all",
     "elementType": "labels",
     "stylers": [
         {
             "visibility": "on"
         }
     ]
 },
 {
     "featureType": "all",
     "elementType": "labels.text.stroke",
     "stylers": [
         {
             "visibility": "off"
         }
     ]
 },
 {
     "featureType": "administrative",
     "elementType": "all",
     "stylers": [
         {
             "visibility": "on"
         }
     ]
 },
 {
     "featureType": "administrative.neighborhood",
     "elementType": "labels.text.fill",
     "stylers": [
         {
             "color": "#333333"
         }
     ]
 },
 {
     "featureType": "poi",
     "elementType": "all",
     "stylers": [
         {
             "visibility": "on"
         }
     ]
 },
 {
     "featureType": "poi.business",
     "elementType": "labels.text",
     "stylers": [
         {
             "visibility": "off"
         }
     ]
 },
 {
     "featureType": "poi.business",
     "elementType": "labels.icon",
     "stylers": [
         {
             "visibility": "off"
         }
     ]
 },
 {
     "featureType": "poi.place_of_worship",
     "elementType": "labels.text",
     "stylers": [
         {
             "visibility": "off"
         }
     ]
 },
 {
     "featureType": "poi.place_of_worship",
     "elementType": "labels.icon",
     "stylers": [
         {
             "visibility": "off"
         }
     ]
 },
 {
     "featureType": "road",
     "elementType": "geometry",
     "stylers": [
         {
             "visibility": "simplified"
         }
     ]
 },
 {
     "featureType": "road.local",
     "elementType": "labels.text",
     "stylers": [
         {
             "weight": 0.5
         },
         {
             "color": "#333333"
         }
     ]
 },
 {
     "featureType": "transit.station",
     "elementType": "labels.icon",
     "stylers": [
         {
             "gamma": 1
         },
         {
             "saturation": 50
         }
     ]
 },
 {
     "featureType": "water",
     "elementType": "all",
     "stylers": [
         {
             "visibility": "on"
         },
         {
             "saturation": 50
         },
         {
             "hue": "#50a5d1"
         }
     ]
 }
];


$(document).ready(function() {

  function initialize() {


    var gmarkers = [];
    var map = null;
    var infowindow = null;


      var mapOptions = {
        center: new google.maps.LatLng(19.432726, -99.182454),
        zoom: 17,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        mapTypeControl: false,
        zoomControl: true,
        scaleControl: false,
        styles: styles,
        scrollwheel: false,
        navigationControl: false,
        mapTypeControl: false,
        draggable: false
      };


      map = new google.maps.Map(document.getElementById("mack-map"), mapOptions);

      google.maps.event.addListener(map, 'click', function() {
        infowindow.close();
      });

      var locations = [
        ['EQ-Credit', 19.432726, -99.182454]
       ];

      /*infowindow = new google.maps.InfoWindow({
        size: new google.maps.Size(150,50)
      });*/

      function setMarkers(locations) {
        for (var i = 0; i < locations.length; i++) {
          var location = locations[i];
          var myLatLng = new google.maps.LatLng(location[1], location[2]);
          var marker = new google.maps.Marker({
              position: myLatLng,
              animation: google.maps.Animation.DROP,
              map: map,
              title: location[0],
              icon: "http://capa1.developer.velosoft.net/eqcredit/images/pin-map.png",
              title: 'EQ-Credit'
          });

          // Standard markers - if not using infobox
          google.maps.event.addListener(marker, "click", function () {
          map.setCenter(marker.getPosition());
          infowindow.setContent(this.html);
          infowindow.open(map, this);
          });
          gmarkers.push(marker);
        }
      }

      // Add the markers
      setMarkers(locations);

  }

  // add window listener for GMaps
  google.maps.event.addDomListener(window, 'load', initialize);

});
