
  var map;
  var infowindow;

  //
  // Model
  //
  var allPlaces = [
    {
       title: "Bostwick's",
       latLng: {lat: 40.968080, lng: -72.167136},
       marker: null,
       fsqID: '4bd38aa941b9ef3bef7b00e6'
    },
    {
       title: "Harbor Grill",
       latLng: {lat: 40.997734, lng: -72.181847},
       marker: null,
       fsqID: '4cc8c42abcb1b1f703580b8a'
    },
    {
       title: "Babette's",
       latLng: {lat: 40.964672, lng: -72.187619},
       marker: null,
       fsqID: '4c6807598e9120a150a6db64'
    },
    {
       title: "Nick & Toni's",
       latLng: {lat: 40.970175, lng: -72.181330},
       marker: null,
       fsqID: '4a73803df964a5209ddc1fe3'
    },
    {
       title: "Cittanova",
       latLng: {lat: 40.963916, lng: -72.186340},
       marker: null,
       fsqID: '4a95dd48f964a5201c2520e3'
    },
    {
       title: "Serafina",
       latLng: {lat: 40.968930, lng: -72.181731},
       marker: null,
       fsqID: '4bfef9b2369476b0442a8d1f'
    },
    {
       title: "1770 House Restaurant",
       latLng: {lat: 40.958873, lng: -72.190366},
       marker: null,
       fsqID: '4b3171eaf964a520120725e3'
    }
  ];

  //
  // Foursquare API url containing api credentials required
  // "VENUE_ID" will be replaced with fsqID for the restaurant selected
  //
  var fsqURL = 'https://api.foursquare.com/v2/venues/VENUE_ID?client_id=FUU0BFQZQZS15WRMZBQTUUJUY0WZHSGNVTN3OBH4CPFDT1NF&client_secret=MYP0CX33UTJT4SRAXSRMGAIT4S15LNZUNSYVWOSI141BHQA0&v=20130815';

  //
  // Initialize the map
  //
  function initMap() {
    var home = {lat: 41.012555, lng: -72.196681};

    map = new google.maps.Map(document.getElementById('map'), {
      //center: {lat: 40.960593, lng: -72.176940},
      center: {lat: 40.984830, lng: -72.183463},
      zoom: 12
    });

    infowindow = new google.maps.InfoWindow();

    // create a home marker on the map for reference
    var homeMarker = new google.maps.Marker({
      position: home,
      map: map,
      title: '36 Springwood Way East Hampton, NY 11937',
      animation: google.maps.Animation.DROP,
      icon: 'img/home.png'
    });

    google.maps.event.addListener(homeMarker, 'click', (function() {
      infowindow.setContent('<h3>' + homeMarker.title + '</h3>');
      infowindow.open(map, this);
    }));

    // create markers for all the restaurants in our model
    var marker;
    var title;
    var fid;
    for (var i = 0; i < allPlaces.length; i++) {
      allPlaces[i].marker = new google.maps.Marker({
        map: map,
        position: allPlaces[i].latLng,
        title: allPlaces[i].name,
        icon: 'img/restaurant.png'
      });

      marker=allPlaces[i].marker;
      title=allPlaces[i].title;
      fid=allPlaces[i].fsqID;

      // Add listeners for when markers on map are clicked
      google.maps.event.addListener(marker, 'click', (function(titleCopy, fidCopy) {
        return function() {
          thisMarker=this;
          this.setAnimation(google.maps.Animation.BOUNCE);
          setTimeout(function(){ thisMarker.setAnimation(null); }, 1200);
          infowindow.setContent('<h3>' + titleCopy + '</h3>');
          infowindow.open(map, this);
          // lookup fsqID for this marker
          showInfo(fidCopy);
        };
      })(title, fid));
    }
  } // end initMap()

  //
  // This function makes an asynchronous call to the Foursquare API to obtain info on this restaurant,
  // and then sets the info window content with the information.  If the api call fails, a message will
  // be displayed instead, asking end user to try again later.
  //
  function showInfo(fid) {
    var url=fsqURL.replace("VENUE_ID", fid);

    $.ajax({url: url, success: function(result){
        var venueCategory = '';
        var venueName = '<h3>' + result.response.venue.name + '</h3>';
        var venueAddress =  '<p>' + result.response.venue.location.formattedAddress[0] + '<br/>' + result.response.venue.location.formattedAddress[1];
        var venuePhone = '<br/><a href="tel:+' + result.response.venue.contact.phone + '">' + result.response.venue.contact.formattedPhone + '</a></p>';
        if (result.response.venue.price.message == 'Moderate') {
          venueCategory='$$$';
        } else if (result.response.venue.price.message == 'Expensive') {
          venueCategory='$$$$';
        } else {
          venueCategory='$$$$$';
        }
        var venuePrice =  '<p>' + venueCategory + ' ' + result.response.venue.price.message + '</p>';
        infowindow.setContent(venueName + venueAddress + venuePhone + venuePrice);

    } , error: function(jqXHR, textStatus, errorThrown){
          infowindow.setContent('<h3>' +title + '</h3><p>Additional information can not be obtained at the moment.  Please try again later.</p>');
        }
    });
  }  // end showInfo()


//
// ViewModel
//
var ViewModel = function() {
  var self = this;

  self.showPlaces = ko.observableArray(allPlaces);
  self.filter = ko.observable('');
  self.addlInfo = ko.observable('');

  //
  // This computed observable is bound to the listview and will display only restaurants matching the search filter.
  // Non-matching restaurants will be removed from the map.
  //
  self.search = ko.computed(function(){
    return ko.utils.arrayFilter(self.showPlaces(), function(showPlaces){
      if (showPlaces.title.toLowerCase().indexOf(self.filter().toLowerCase()) >= 0) {
        if (map!=null) showPlaces.marker.setMap(map);
        return true;
      } else {
        showPlaces.marker.setMap(null);
        return false;
      }
    });
  });

  //
  // This function gets called when the user clicks a restaurant in the list on the view.
  // The marker on the map will animate briefly and the info window for that restaurant will open.
  // It calls showInfo() to set the info window content.
  //
  this.getID = function(listItem) {
    var i=0;
    var restaurant='';
    var title=listItem.title;
    infowindow.setContent('<h3>' + listItem.title + '</h3>');
    for (i=0; i<allPlaces.length; i++) {
      if (allPlaces[i].title==listItem.title){
        restaurant=allPlaces[i];
        restaurant.marker.setAnimation(google.maps.Animation.BOUNCE);
        setTimeout(function(){ restaurant.marker.setAnimation(null); }, 1200);
        infowindow.open(map, allPlaces[i].marker);
      }
    }
    showInfo(restaurant.fsqID);
  };

} // end ViewModel()

ko.applyBindings(new ViewModel());


