

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
            // for (var i = 0; i < results.length; i++) {
                  // console.log(results[i]);

                  var a = document.createElement('a');
                  a.setAttribute('href','#');
                  a.setAttribute('class', 'card card-style');


                  var div2 = document.createElement('div');
                  // div2.setAttribute('class', 'card-bottom px-3 py-2');
                  div2.setAttribute('class', 'card');
                  div2.setAttribute('data-card-height', '255');
                  div2.setAttribute('style', 'background-image:url(images/food/full/1s.jpg)');

                  var div1 = document.createElement('div');
                  div1.setAttribute('class', 'card-bottom px-3 py-2');
                  
                  var h1 = document.createElement('h1');
                  h1.setAttribute('class', 'color-white font-28 pb-1');
                  h1.appendChild(document.createTextNode("sa"));
                  // h1.appendChild(document.createTextNode(results[i].name));

                  var p = document.createElement('p');
                  p.setAttribute('class', 'color-white opacity-50 mb-2');
                  p.appendChild(document.createTextNode("results[i].vicinity"));
                  // p.appendChild(document.createTextNode(results[i].vicinity));

                  div1.appendChild(h1);
                  div1.appendChild(p);

                  div2.appendChild(div1);

                  a.appendChild(div2);
                  document.getElementById('supermakets_container').appendChild(div2);


            // }
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


{/* <a href="#" class="card card-style">
            <div class="card mb-0" data-card-height="255" style="background-image:url(images/food/full/1s.jpg)">
                <div class="card-bottom px-3 py-2">
                    <h1 class="color-white font-28 pb-1">Classic Burger</h1>
                    <p class="color-white opacity-50 mb-2">
                        Grilled beef, BBQ sauce, onion rings, bacon slices, cheese, lettuce, salad dressing.
                    </p>
                </div>
                <div class="card-overlay bg-gradient"></div>
            </div>
        </a>     */}

    // var linkText = document.createTextNode("my title text");
    // a.appendChild(linkText);
    // a.title = "my title text";
    // a.href = "http://example.com";
    // document.body.appendChild(a);
    // console.log("Hello world!");
    // document.getElementById('get-started-button').addEventListener('click', () => {
    //     console.log("Hello world!");
    // });
