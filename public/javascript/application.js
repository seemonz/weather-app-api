$(function() {
  // selectors
  var sanFranEL = $("#sanfrancisco");

  // SanFrancisco Current Observations API get
  $('.weather').on('click', function() {
    var weatherApi = 'http://api.wunderground.com/api/626ed9352fa3920c/conditions/q/CA/San_Francisco.json';
    $.getJSON(weatherApi, {
    })
      .success( function(data) {
        var sanFranTempC = data.current_observation.temp_c;
        $('<p>').text(sanFranTempC).appendTo(sanFranEL);
      });
    });

});
