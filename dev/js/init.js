/*jslint browser: true*/
/*global $, jQuery, alert*/
jQuery(document).ready(function ($) {

  (function(window, $, undefined) {
  'use strict';

  // $('.task-nav-r').stop(true,true).slideToggle();

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
      if($(window).width() < 480 ) {
        $('.task-nav-r').stop(true,true).slideToggle();
      }
      // $this.next( '.site-header nav' ).stop(true,true).slideToggle();

      });
  })( this, jQuery );


  // if($(window).width() > 480 ) {
  //   $('.task-nav-r').stop(true,true).slideToggle();
  // }


  (hideMenu = function () {
		$document_width = $(document).width();
		$obj = $( '.primary-nav' );
    $obj2 = $( '.secondary-nav' );
    $obj3 = $( '.task-nav-r' );
		$btn = $('.menu-toggle');

		if($(window).width() < 1140 ) // This should match break point in the CSS minus 15 pixels for the browser scroll gutter
		{
			$obj.hide();
      $obj2.hide();
      if($(window).width() < 480 ) {
        $obj3.hide();
      }

			$btn.show();
			$('.menu-toggle i').removeClass();
			$('.menu-toggle i').addClass('fa fa-close');
		}

		else

		{
			$obj.show();
      $obj2.show();

      if($(window).width() < 480 ) {
        $obj3.show();
      }
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

  // $('body').find('a').removeClass('current');

  // $('a[href^="#"]').on('click',function (e) {
  // $('a[href^="?page="]').on('click',function (e) {
  	    // e.preventDefault();

        // $('body').find('a').removeClass('current');

        // $('body').find('a[href^="?page="]').

        // if $('a[href^="?page="]').hasClass('current') {
        //   $('a[href^="?page="]').removeClass('current');
        //   this.addClass('current');
        // }

  	    // var target = this.hash;
  	    // var $target = $(target);
        //
  	    // $('html, body').stop().animate({
  	    //     'scrollTop': $target.offset().top
  	    // }, 1000, 'swing', function () {
  	    //     window.location.hash = target;
  	    // });
  // 	});
    $('#section1').css('opacity', 0);
    $('#section2').css('opacity', 0);
    $('#section3').css('opacity', 0);
    $('#section4').css('opacity', 0);
    $('#section5').css('opacity', 0);

    $('#section1').waypoint(function() {
    $('#section1').addClass('animated fadeInLeft');
  }, { offset: '90%' });

    $('#section2').waypoint(function() {
    $('#section2').addClass('animated fadeInRight');
    }, { offset: '90%' });

    $('#section3').waypoint(function() {
    $('#section3').addClass('animated fadeInLeft');
    }, { offset: '90%' });

    $('#section4').waypoint(function() {
    $('#section4').addClass('animated fadeInRight');
    }, { offset: '90%' });

    $('#section5').waypoint(function() {
    $('#section5').addClass('animated fadeInLeft');
    }, { offset: '90%' });

    function getFileName() {
      //this gets the full url
      var url = document.location.href;
      // //this removes the anchor at the end, if there is one
      url = url.substring(0, (url.indexOf("#") == -1) ? url.length : url.indexOf("#"));
      // //this removes the query after the file name, if there is one
      url = url.substring(0, (url.indexOf("?") == -1) ? url.length : url.indexOf("?"));
      // //this removes everything before the last slash in the path
      url = url.substring(url.lastIndexOf("/") + 1, url.length);
      // //this removes everything after the last period (file extension)
      url = url.substring(0, url.lastIndexOf("."));

      //this removes everything before the last slash in the path
      // url = url.substring(url.length, url.lastIndexOf("page=") + 5);

      //this replaces the "-" with a " ".
      // url = url.replace(/\-/g, ' ');


      //return
      return url;
      }

  // var $activePage = 'benefits-overview';
  var url = getFileName();
  var $title = url.replace(/\-/g, ' ');

  $title = $title.toLowerCase().replace(/\b[a-z]/g, function(letter) {

    return letter.toUpperCase();

  });
console.log($title+"**************");
  $('title').html('Thermo - ' + $title);

  if (url == '' || url == 'home') {
    $('a[href^="/"]').addClass('current');
    $('body').addClass('home');
  }
  else
  {
    $('a[href^='+url+']').addClass('current');
    $("#page-header").text($title);
  }

});
