$(document).ready(function() {

  // mobile toggle menu
  $("#toggle").click(function() {
    $(this).toggleClass("open");
    $("#menu").slideToggle();
  });
});
