$(document).ready(function() {

  // load particles
  /* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
  particlesJS.load('particles', 'assets/particles.json');


  // mobile toggle menu
  $("#toggle-bars, #menu li").click(function() {
    $("#toggle-bars").toggleClass("open");
    $("#menu").slideToggle();
  });


  // make mobile menu close if clicked outside of it
  var isOpen = false;
  var insideClick;

  $(document, "#toggle-bars, #menu").on('click', function(event) {
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


  // change menu bars color when scrolling past header section
  $(window).on("scroll", function() {
    var wnd = $(window).scrollTop();

    if (wnd > 300) {
      $("#toggle-bars div").addClass("colored-bg").removeClass("white-bg");
    } else {
      $("#toggle-bars div").addClass("white-bg").removeClass("colored-bg");
    }
  });

});
