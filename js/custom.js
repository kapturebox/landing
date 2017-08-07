$(document).ready(function() {

  // mobile toggle menu
  $("#toggle-bars, #menu li").click(function() {
    $("#toggle-bars").toggleClass("open");
    $("#menu").slideToggle();
  });

});
