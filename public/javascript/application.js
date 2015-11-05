$(function() {
  // selectors
  var sanFranEL = $("#sanfrancisco");
  var weatherTemp = $('#weather-template').html();
  var searchTemp = $('#search-list-template').html();

  // SanFrancisco Current Observations API get
  $('.weather').on('click', function() {
    var weatherApi = 'http://api.wunderground.com/api/626ed9352fa3920c/conditions/q/CA/San_Francisco.json';
    $.getJSON(weatherApi, {
    })
      .success( function(data) {
        var cityName = data.current_observation.display_location.full;
        var sanFranTempC = data.current_observation.temp_c;
        var observationTime = data.current_observation.observation_time;
        var weatherRendered = Mustache.render(weatherTemp, {tempC: sanFranTempC, cityName: cityName, observationTime: observationTime});
        $('#sanfrancisco').replaceWith(weatherRendered);
      });
    });

    function searchResultNames(result) {
      var searchRendered = Mustache.render(searchTemp, {searchName: result.name});
      return searchRendered;
    }


    $('#search-form').on('submit', function (e) {
      var searchString = $('input').val();
      var searchApi = 'http://autocomplete.wunderground.com/aq?query=' + searchString + '&cb=callback';
      $.ajax({
         type: 'GET',
         async: false,
         jsonpCallback: "callback",
         contentType: 'application/json',
         url: searchApi,
         dataType: 'jsonp',
         success: function(data){
             var searchResults = data.RESULTS;
             $('#search-list-div ul').empty();
             searchResults.forEach( function(city) {
               $('#search-list-div ul').append(searchResultNames(city));
             });
           },
           error: function(e){
             console.log(e)
           }
         });
         return false;
    });



});
