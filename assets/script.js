$(document).ready(function () {

  // smooth scroll, https://www.w3schools.com/howto/howto_css_smooth_scroll.asp#section1
  $(".nav-link").on('click', function (event) {

    if (this.hash !== "") {
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 500, function () {

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    }
  });

  $("#copyrightYear").text("© " + (new Date).getFullYear());
});