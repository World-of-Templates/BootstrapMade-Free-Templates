/**
* Template Name: WeBuild - v2.2.1
* Template URL: https://bootstrapmade.com/free-bootstrap-coming-soon-template-countdwon/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
!(function($) {
  "use strict";

  // Set the count down timer
  if ($('.countdown').length) {
    var count = $('.countdown').data('count');
    var template = $('.countdown').data('template');
    $('.countdown').countdown(count, function(event) {
      $(this).html(event.strftime(template));
    });
  }

  // Smooth scroll for  links with .scrollto classes
  $(document).on('click', '.scrollto', function(e) {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      e.preventDefault();
      var target = $(this.hash);
      if (target.length) {
        var scrollto = target.offset().top;
        $('html, body').animate({
          scrollTop: scrollto
        }, 1500, 'easeInOutExpo');
        return false;
      }
    }
  });

})(jQuery);