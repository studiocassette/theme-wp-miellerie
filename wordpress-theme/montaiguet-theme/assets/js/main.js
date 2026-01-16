/**
 * Main JavaScript for Montaiguet Theme
 */

(function($) {
  'use strict';
  
  // Mobile Menu Toggle
  $('.mobile-menu-toggle').on('click', function() {
    $(this).toggleClass('active');
    $('.menu-container').toggleClass('active');
  });
  
  // Smooth scroll for anchor links
  $('a[href^="#"]').on('click', function(e) {
    var target = $(this.getAttribute('href'));
    
    if (target.length) {
      e.preventDefault();
      $('html, body').stop().animate({
        scrollTop: target.offset().top - 80
      }, 800);
      
      // Close mobile menu if open
      $('.menu-container').removeClass('active');
      $('.mobile-menu-toggle').removeClass('active');
    }
  });
  
  // Store card click handlers
  $('.store-card').on('click', function() {
    $('.store-card').removeClass('active');
    $(this).addClass('active');
    
    var lat = $(this).data('lat');
    var lng = $(this).data('lng');
    
    // Trigger map center change (handled by mapbox-init.js)
    $(document).trigger('store-selected', [lat, lng]);
  });
  
  // Contact Form AJAX Submission
  $('#contact-form').on('submit', function(e) {
    e.preventDefault();
    
    var $form = $(this);
    var $message = $form.find('.form-message');
    var $button = $form.find('.btn-submit');
    
    // Disable button during submission
    $button.prop('disabled', true).text('Envoi en cours...');
    $message.hide();
    
    $.ajax({
      url: montaiguet_ajax.ajax_url,
      type: 'POST',
      data: {
        action: 'montaiguet_contact_form',
        nonce: montaiguet_ajax.nonce,
        name: $form.find('[name="name"]').val(),
        email: $form.find('[name="email"]').val(),
        phone: $form.find('[name="phone"]').val(),
        message: $form.find('[name="message"]').val()
      },
      success: function(response) {
        if (response.success) {
          $message
            .removeClass('error')
            .addClass('success')
            .text(response.data.message)
            .show();
          $form[0].reset();
        } else {
          $message
            .removeClass('success')
            .addClass('error')
            .text(response.data.message)
            .show();
        }
      },
      error: function() {
        $message
          .removeClass('success')
          .addClass('error')
          .text('Une erreur est survenue. Veuillez réessayer.')
          .show();
      },
      complete: function() {
        $button.prop('disabled', false).text('Envoyer le message');
      }
    });
  });
  
  // Fade in elements on scroll
  function fadeInOnScroll() {
    $('.honey-card, .blog-card, .store-card').each(function() {
      var elementTop = $(this).offset().top;
      var elementBottom = elementTop + $(this).outerHeight();
      var viewportTop = $(window).scrollTop();
      var viewportBottom = viewportTop + $(window).height();
      
      if (elementBottom > viewportTop && elementTop < viewportBottom) {
        $(this).css('opacity', '1');
      }
    });
  }
  
  // Initial opacity for cards
  $('.honey-card, .blog-card, .store-card').css('opacity', '0');
  
  $(window).on('scroll', fadeInOnScroll);
  fadeInOnScroll(); // Initial check
  
  // Header scroll effect
  $(window).on('scroll', function() {
    if ($(this).scrollTop() > 100) {
      $('.site-header').addClass('scrolled');
    } else {
      $('.site-header').removeClass('scrolled');
    }
  });
  
})(jQuery);