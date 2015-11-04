$(function() {
  // selectors
  var sanFranEL = $("#sanfrancisco");
  var weatherTemp = $('#weather-template').html();
  // var weatherRendered = Mustache.render(weatherTemp, {tempC: sanFranTempC});
  
  // SanFrancisco Current Observations API get
  $('.weather').on('click', function() {
    var weatherApi = 'http://api.wunderground.com/api/626ed9352fa3920c/conditions/q/CA/San_Francisco.json';
    $.getJSON(weatherApi, {
    })
      .success( function(data) {
        var sanFranTempC = data.current_observation.temp_c;
        var weatherRendered = Mustache.render(weatherTemp, {tempC: sanFranTempC});
        $('#sanfrancisco').html(weatherRendered);
        // $('<p>').text(sanFranTempC).appendTo(sanFranEL);
      });
    });

});
