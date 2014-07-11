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

});
