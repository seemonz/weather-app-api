$(function() {
  // selectors
  var sanFranEL = $("#sanfrancisco");
  var weatherTemp = $('#weather-template').html();

  // SanFrancisco Current Observations API get
  $('.weather').on('click', function() {
    var weatherApi = 'http://api.wunderground.com/api/626ed9352fa3920c/conditions/q/CA/San_Francisco.json';
    $.getJSON(weatherApi, {
    })
      .success( function(data) {
        var cityName = data.current_observation.display_location.full;
        var sanFranTempC = data.current_observation.temp_c;
        var weatherRendered = Mustache.render(weatherTemp, {tempC: sanFranTempC, cityName: cityName});
        $('#sanfrancisco').replaceWith(weatherRendered);
      });
    });

});
