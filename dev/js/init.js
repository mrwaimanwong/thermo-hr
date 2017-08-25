/*jslint browser: true*/
/*global $, jQuery, alert*/
jQuery(document).ready(function ($) {

  (function(window, $, undefined) {
  'use strict';


  $('.primary-nav').before( '<button class="menu-toggle" role="button" aria-pressed="false"><i class="fa fa-navicon"></i></button>'); // Add toggles to menus
  // Show/hide the navigation
  $('.menu-toggle').on( 'click', function() {
    var $this = $( this );
    if (this.firstChild.className == 'fa fa-navicon'){
      $this.find('i').removeClass();
      $this.find('i').addClass('fa fa-close');
    } else {
      $this.find('i').removeClass();
      $this.find('i').addClass('fa fa-navicon');
    }
    $this.attr('aria-pressed', function(index, value) {
      return 'false' === value ? 'true' : 'false';
      });

      $this.toggleClass( 'activated' );
      $('.primary-nav').stop(true,true).slideToggle();
      $('.secondary-nav').stop(true,true).slideToggle();
      // $this.next( '.site-header nav' ).stop(true,true).slideToggle();

      });
  })( this, jQuery );

  (hideMenu = function () {
			$document_width = $(document).width();

		$obj = $( '.primary-nav' );
    $obj2 = $( '.secondary-nav' );
		$btn = $('.menu-toggle');
		// alert($(window).width());

		if($(window).width() < 1140 ) // This should match break point in the CSS minus 15 pixels for the browser scroll gutter
		{
			$obj.hide();
      $obj2.hide();
			$btn.show();
			$('.menu-toggle i').removeClass();
			$('.menu-toggle i').addClass('fa fa-close');
		}

		else

		{
			$obj.show();
      $obj2.show();
			$btn.hide();
			$('.menu-toggle i').removeClass();
			$('.menu-toggle i').addClass('fa fa-navicon');
		}

	})(); // Run instantly

  $(window).resize(function()
{
	if($document_width != $(document).width()){
		hideMenu();
	} else {
		return;
	}
});

$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 1000, 'swing', function () {
	        window.location.hash = target;
	    });
	});

});
