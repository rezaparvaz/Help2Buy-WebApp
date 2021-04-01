

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(
    (position) => {
      const pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };
      var request1 = {
        location: { lat: pos.lat, lng: pos.lng },
        radius: '10000',
        keyword: ['supermarket'],
      };
      var service = new google.maps.places.PlacesService(document.createElement('div'));
      service.nearbySearch(request1, function (results, status, next_page_token) {
        if (status == google.maps.places.PlacesServiceStatus.OK) {

          for (var i = 0; i < results.length; i++) {


            var a = document.createElement('a');
            a.setAttribute('href', '#');
            a.classList.add('card', 'card-style');

            var div3 = document.createElement('div');
            div3.classList.add('card', 'mb-0');
            div3.setAttribute("data-card-height", "255");
            if (results[i] && results[i].photos) {
              div3.setAttribute('style', 'background-image: url(\"' + results[i].photos[0].getUrl({}) + '\"); height: 255px;');
            } else {
              div3.setAttribute('style', 'background-image: url(\"images/food/full/8s.jpg\"); height: 255px;');

            }
            // var att = document.createAttribute("data-card-height");       // Create a "class" attribute
            // att.value = "255";    
            // div3.setAttributeNode(att)

            var div2 = document.createElement('div');
            div2.classList.add('card-overlay', 'bg-gradient');

            var div1 = document.createElement('div');
            div1.classList.add('card-bottom', 'px-3', 'py-2');

            var h1 = document.createElement('h1');
            h1.appendChild(document.createTextNode(results[i].name));
            h1.classList.add('color-white', 'font-28', 'pb-1')

            var p = document.createElement('p');

            p.appendChild(document.createTextNode(results[i].vicinity));
            p.classList.add('color-white', 'opacity-50', 'mb-2');

            div1.appendChild(h1);
            div1.appendChild(p);

            div3.appendChild(div1);
            div3.appendChild(div2);

            a.appendChild(div3);
            document.getElementById('supermakets_container').appendChild(a);


          }

// console.log(results);
// var request2 = {
            // location: { lat: pos.lat, lng: pos.lng },
            // radius: '10000',
            // keyword: ['supermarket'],
          //   pagetoken: next_page_token.o
          // };
          // results = [];
          // status = "";
          // next_page_token = "";
          // service.nearbySearch(request2, function (results, status, next_page_token) {
          //   if (status == google.maps.places.PlacesServiceStatus.OK) {
              // for (var i = 0; i < results.length; i++) {


              //   var a = document.createElement('a');
              //   a.setAttribute('href', '#');
              //   a.classList.add('card', 'card-style');

              //   var div3 = document.createElement('div');
              //   div3.classList.add('card', 'mb-0');
              //   div3.setAttribute("data-card-height", "255");
              //   if (results[i] && results[i].photos) {
              //     div3.setAttribute('style', 'background-image: url(\"' + results[i].photos[0].getUrl({}) + '\"); height: 255px;');
              //   } else {
              //     div3.setAttribute('style', 'background-image: url(\"images/food/full/8s.jpg\"); height: 255px;');

              //   }
              //   // var att = document.createAttribute("data-card-height");       // Create a "class" attribute
              //   // att.value = "255";    
              //   // div3.setAttributeNode(att)

              //   var div2 = document.createElement('div');
              //   div2.classList.add('card-overlay', 'bg-gradient');

              //   var div1 = document.createElement('div');
              //   div1.classList.add('card-bottom', 'px-3', 'py-2');

              //   var h1 = document.createElement('h1');
              //   h1.appendChild(document.createTextNode(results[i].name));
              //   h1.classList.add('color-white', 'font-28', 'pb-1')

              //   var p = document.createElement('p');

              //   p.appendChild(document.createTextNode(results[i].vicinity));
              //   p.classList.add('color-white', 'opacity-50', 'mb-2');

              //   div1.appendChild(h1);
              //   div1.appendChild(p);

              //   div3.appendChild(div1);
              //   div3.appendChild(div2);

              //   a.appendChild(div3);
              //   document.getElementById('supermakets_container').appendChild(a);


              // }
              // console.log(results);


              // var request3 = {
                // location: { lat: pos.lat, lng: pos.lng },
                // radius: '10000',
                // keyword: ['supermarket'],
              //   pagetoken: next_page_token
              // };

              // results = [];
              // status = "";
              // next_page_token = "";
              // service.nearbySearch(request3, function (results, status, next_page_token) {
              //   if (status == google.maps.places.PlacesServiceStatus.OK) {
                  // for (var i = 0; i < results.length; i++) {
                    // console.log(results);


                  //   var a = document.createElement('a');
                  //   a.setAttribute('href', '#');
                  //   a.classList.add('card', 'card-style');

                  //   var div3 = document.createElement('div');
                  //   div3.classList.add('card', 'mb-0');
                  //   div3.setAttribute("data-card-height", "255");
                  //   if (results[i] && results[i].photos) {
                  //     div3.setAttribute('style', 'background-image: url(\"' + results[i].photos[0].getUrl({}) + '\"); height: 255px;');
                  //   } else {
                  //     div3.setAttribute('style', 'background-image: url(\"images/food/full/8s.jpg\"); height: 255px;');

                  //   }
                  //   // var att = document.createAttribute("data-card-height");       // Create a "class" attribute
                  //   // att.value = "255";    
                  //   // div3.setAttributeNode(att)

                  //   var div2 = document.createElement('div');
                  //   div2.classList.add('card-overlay', 'bg-gradient');

                  //   var div1 = document.createElement('div');
                  //   div1.classList.add('card-bottom', 'px-3', 'py-2');

                  //   var h1 = document.createElement('h1');
                  //   h1.appendChild(document.createTextNode(results[i].name));
                  //   h1.classList.add('color-white', 'font-28', 'pb-1')

                  //   var p = document.createElement('p');

                  //   p.appendChild(document.createTextNode(results[i].vicinity));
                  //   p.classList.add('color-white', 'opacity-50', 'mb-2');

                  //   div1.appendChild(h1);
                  //   div1.appendChild(p);

                  //   div3.appendChild(div1);
                  //   div3.appendChild(div2);

                  //   a.appendChild(div3);
                  //   document.getElementById('supermakets_container').appendChild(a);


                  // }


              //   } else {
              //     console.log(pos);

              //   }
              // });

          //   } else {
          //     console.log(pos);

          //   }
          // });


        } else {
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
