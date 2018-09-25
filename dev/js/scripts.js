SP.SOD.executeFunc('sp.js', 'SP.ClientContext', function(){
  $(document).ready(function () {
  // jQuery(document).ready(function ($) {
    // console.log($(document).width() +"**************");

    // function addToggle() {
    //   $('.primary-nav').before( '<button class="menu-toggle" role="button" aria-pressed="false"><i class="fa fa-navicon"></i></button>'); // Add toggles to menus
    //   console.log($(this) +"**************");
    // }
    // addToggle();

    (function(window, $, undefined) {
    'use strict';

    // $('.task-nav-r').stop(true,true).slideToggle();

    $('.primary-nav').before( '<button class="menu-toggle" role="button" aria-pressed="false"><i class="fa fa-close"></i></button>'); // Add toggles to menus
    // Show/hide the navigation
    $('.menu-toggle').on( 'click', function(e) {
      e.preventDefault();
      var $this = $( this );
      // if (this.firstChild.className === 'fa fa-close'){
      //   $this.find('i').removeClass();
      //   $this.find('i').addClass('fa fa-navicon');
      // } else {
      //   $this.find('i').removeClass();
      //   $this.find('i').addClass('fa fa-close');
      // }

      $this.attr('aria-pressed', function(index, value) {
        return 'false' === value ? 'true' : 'false';
        });

        $this.toggleClass( 'activated' );
        $this.find('i').toggleClass('fa-navicon');
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
      $document_width = $(window).width();
  		$obj = $( '.primary-nav' );
      $obj2 = $( '.secondary-nav' );
      $obj3 = $( '.task-nav-r' );
  		$btn = $('.menu-toggle');

  		if($(window).width() < 1141 ) // This should match break point in the CSS minus 15 pixels for the browser scroll gutter
  		{
  			$obj.hide();
        $obj2.hide();
        $obj3.hide();

  			$btn.show();
  			$('.menu-toggle i').removeClass();
  			$('.menu-toggle i').addClass('fa fa-close fa-navicon');
        // $('.menu-toggle i').toggleClass('fa-navicon');
  		}

  		else

  		{
  			$obj.show();
        $obj2.show();

        if($(window).width() < 480 ) {
          $obj3.show();
        }
  			$btn.hide();
  			// $('.menu-toggle i').removeClass();
  			// $('.menu-toggle i').addClass('fa fa-close');
        // $('.menu-toggle i').toggleClass('fa-close');
  		}

  	})(); // Run instantly

    $(window).resize(function()
  {
  	if($document_width != $(window).width()){
  		hideMenu();
  	} else {
  		return;
  	}
  });

  // Select all links with hashes
  $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('a[href="#"]')
    .not('a[href="#0"]')
    .click(function(event) {
      event.preventDefault();
      // On-page links
      if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
        &&
        location.hostname == this.hostname
      ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          // console.log($(this.length) +"**************");

          $('#s4-workspace').animate({
            scrollTop: target.offset().top
          }, 1000, function() {
            // Callback after animation
            // Must change focus!
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) { // Checking if the target was focused
              return false;
            } else {
              $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
              $target.focus(); // Set focus again
            };
          });
        }
      }
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

    function sectionHide(){
      'use strict';
      $('#section1').css('opacity', 0);
      $('#section2').css('opacity', 0);
      $('#section3').css('opacity', 0);
      $('#section4').css('opacity', 0);
      $('#section5').css('opacity', 0);
      console.log($(this)+"GG$$F$F$F$F$F$");
    }
    var hideo = sectionHide();

    // setInterval(function(){ alert("Hello"); }, 3000);


      // $('#section1').waypoint(function() {
      // $('#section1').addClass('animated fadeInLeft');
      // }, { offset: '90%' });
      //
      // $('#section2').waypoint(function() {
      // $('#section2').addClass('animated fadeInRight');
      // }, { offset: '90%' });
      //
      // $('#section3').waypoint(function() {
      // $('#section3').addClass('animated fadeInLeft');
      // }, { offset: '90%' });
      //
      // $('#section4').waypoint(function() {
      // $('#section4').addClass('animated fadeInRight');
      // }, { offset: '90%' });
      //
      // $('#section5').waypoint(function() {
      // $('#section5').addClass('animated fadeInLeft');
      // }, { offset: '90%' });

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
    console.log(url+"######### ##");
    var $title = url.replace(/\-/g, ' ');
    $title = $title.split(/(?=[A-Z])/).join(" ");  // -> split at the caps
    var $upper_title = $title.toLowerCase().replace(/\b[a-z]/g, function(letter) {

      return letter.toUpperCase();

    });

    $('title').html('Thermo - ' + $title);
    $("a[href^='"+ url +"']").addClass("current");
    if ($title === 'Enrollment Home') {
      // $('a[href^="/"]').addClass('current');
      $('#sandbox').addClass('ww-home');
    }
    else
    {
      // $("a[href^='"+ url +"']").addClass("current");
      $("#page-header").text($upper_title);
      $('#sandbox').addClass('boo');
    }

  });

  var siteUrl = 'https://thermofisher.sharepoint.com/sites/functions/hr1/USBenefits';

   var collListItem;
  var collListItemsDisc;
   SP.SOD.executeFunc('sp.js', 'SP.ClientContext', retrieveListItems);
  function retrieveListItems(){
      var clientContext = new SP.ClientContext(siteUrl);
      var oList = clientContext.get_web().get_lists().getByTitle('Pages');

      var camlQuery = new SP.CamlQuery();

   var pageValue="NavigationPage";

  camlQuery.set_viewXml("<View><Query><Where><Eq><FieldRef Name ='PageType'/><Value Type='Text'>NavigationPage</Value></Eq></Where><OrderBy><FieldRef Name='CustomOrder'/></OrderBy></Query></View>");

         collListItem= oList.getItems(camlQuery);

            clientContext.load(collListItem);


      clientContext.executeQueryAsync(onQuerySucceeded,onQueryFailed);
  }

  function onQuerySucceeded() {
  console.log('hi in success');
  var ListEnumerator =collListItem.getEnumerator();
          while (ListEnumerator.moveNext()) {

              var currentItem = ListEnumerator.get_current();
  			// alert(currentItem.get_item('FileLeafRef'));
        console.log(currentItem.get_item('FileLeafRef')+"$$$");
  }
  }

  function onQueryFailed(){
    // alert(' hi in fail');
    console.log(' hi in fail');
  }
});
