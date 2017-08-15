$(document).ready(function() {

  var isOpen = false;
  var insideClick;

  // mobile toggle menu
  $("#toggle-bars, #menu li").click(function() {
    $("#toggle-bars").toggleClass("open");
    $("#menu").slideToggle();
  });


  // make mobile menu close if clicked outside of it
  $(document, "#toggle-bars, #menu").on('click', function() {
    var eventId = $(event.target).closest('#toggle-bars, #menu').attr('id');

    if ($("#toggle-bars").hasClass("open")) {
      isOpen = true;
    }

    if (eventId == null) {
      insideClick = false;
    } else if (eventId == 'toggle-bars' || 'menu') {
      insideClick = true;
    }

    if (isOpen && !insideClick) {
      $("#toggle-bars").removeClass("open");
      $("#menu").slideUp();
    }
  });

});
