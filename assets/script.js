$(document).ready(function () {
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