 // REF: http://foundation.zurb.com/docs/
// REF: http://simpleweatherjs.com

//simple
if ("geolocation" in navigator) {
  $('.js-geolocation').show(); 
} else {
  $('.js-geolocation').hide();
}

/* Where in the world are you? */
$('.js-geolocation').on('click', function() {
  navigator.geolocation.getCurrentPosition(function(position) {
    loadWeather(position.coords.latitude+','+position.coords.longitude); //load weather using your lat/lng coordinates
  });
});

/* 
* Test Locations
* Austin lat/long: 30.2676,-97.74298
* Austin WOEID: 2357536
*/
$(document).ready(function() {
  loadWeather('Seattle',''); //@params location, woeid
});

function loadWeather(location, woeid) {
  $.simpleWeather({
    location: location,
    woeid: woeid,
    unit: 'f',
    success: function(weather) {
      html = '<h2><i class="icon-'+weather.code+'"></i> '+weather.temp+'&deg;'+weather.units.temp+'</h2>';
      html += '<ul><li>'+weather.city+', '+weather.region+'</li>';
      html += '<li class="currently">'+weather.currently+'</li>';
      html += '<a href="'+weather.link+'">View Forecast &raquo;</a>';  

      if (weather.code >= 0 && weather.code <=10) {
        $("img").removeAttr("src").attr("src", "img//boots.png");
      }
      if (weather.code >= 11 && weather.code <=12) {
        $("img").removeAttr("src").attr("src", "img//shoes.png");
      }
      if (weather.code >= 13 && weather.code <=16) {
        $("img").removeAttr("src").attr("src", "img//boots.png");
      }
      if (weather.code >= 17 && weather.code <=25) {
        $("img").removeAttr("src").attr("src", "img//shoes.png");
      }
      if (weather.code >= 26 && weather.code <=36) {
        $("img").removeAttr("src").attr("src", "img//Flip-Flops.png");
      }
      if (weather.code >= 37 && weather.code <=47) {
        $("img").removeAttr("src").attr("src", "img//boots.png");
      }
      $("#weather").html(html);
    },




    error: function(error) {
      $("#weather").html('<p>'+error+'</p>');
    }

  });
}




