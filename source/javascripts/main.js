$(document).ready(function() {

  var map = new Datamap({
    element: document.getElementById('container'),
    scope: 'usa',
    fills: {
      defaultFill: 'rgba(23,88,210,0.6)'
    },
    geographyConfig: {
      highlightOnHover: false,
      popupOnHover: false
    }
  });

  var bombs = [
    {
      radius: 25,
      latitude: 40.71,
      longitude: -74.01
    },
  ]

  var get_bombs = function() {
    $.ajax({
      type: 'GET',
      url: 'http://local.howaboutwe.com:3000/api/mappy?callback=?',
      success: function(data) {
        var bombs = [data];
        map.bubbles(bombs);
      }
    });
  }

  setInterval(get_bombs, 1000);

});
