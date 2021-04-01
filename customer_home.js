

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(
    (position) => {
      const pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };
      var request = {
        location: {lat: pos.lat, lng: pos.lng},
        radius: '15000',
        keyword: ['supermarket']
      };
      var service = new google.maps.places.PlacesService(document.createElement('div'));
      service.nearbySearch(request, function(results, status) {
        if (status == google.maps.places.PlacesServiceStatus.OK) {
            for (var i = 0; i < results.length; i++) {
                  console.log(results[i].name);
            }
          }else {
            console.log(pos);

          }
    });

    },
    () => {
      console.log("Gooz");
    }
  );
}




    // var ass = document.createElement('a');
    // var linkText = document.createTextNode("my title text");
    // a.appendChild(linkText);
    // a.title = "my title text";
    // a.href = "http://example.com";
    // document.body.appendChild(a);
    // console.log("Hello world!");
    // document.getElementById('get-started-button').addEventListener('click', () => {
    //     console.log("Hello world!");
    // });
