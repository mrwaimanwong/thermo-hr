SP.SOD.executeFunc('sp.js', 'SP.ClientContext', function(){
  $(document).ready(function () {

    (function(window, $, undefined) {
    'use strict';

    $('.primary-nav').before( '<button class="menu-toggle" role="button" aria-pressed="false"><i class="fa fa-close"></i></button>'); // Add toggles to menus
    // Show/hide the navigation
    $('.menu-toggle').on( 'click', function(e) {
      e.preventDefault();
      var $this = $( this );

      $this.attr('aria-pressed', function(index, value) {
        return 'false' === value ? 'true' : 'false';
        });

        $this.toggleClass( 'activated' );
        $this.find('i').toggleClass('fa-navicon');
        $('.primary-nav').stop(true,true).slideToggle();
        $('.secondary-nav').stop(true,true).slideToggle();
        if($(window).width() < 880 ) {
          $('.task-nav-r').stop(true,true).slideToggle();
        }

        });
    })( this, jQuery );


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
  		}

  		else

  		{
  			$obj.show();
        $obj2.show();

        if($(window).width() < 480 ) {
          $obj3.show();
        }
  			$btn.hide();
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
          }, 800, 'linear', function() {
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

    function sectionHide(){
      'use strict';
      $('#section1').css('opacity', 0);
      $('#section2').css('opacity', 0);
      $('#section3').css('opacity', 0);
      $('#section4').css('opacity', 0);
      $('#section5').css('opacity', 0);
      setInterval(function(){ $('#section1').addClass('animated fadeInLeft'); }, 1500);
      // $('#section1').addClass('animated fadeInLeft');
    };
    var hideo = sectionHide();

      var $the_real_slim_shady = $('#s4-workspace');
      $the_real_slim_shady.scroll(function() {
        $('.steps .section').each(function(i){
          var position = $(this).position();
          if (position.top < ($(window).height()/1.25)) {
            if (i % 2 === 0) {
              $(this).addClass('animated fadeInLeft');
            }
            else {
              {
                $(this).addClass('animated fadeInRight');
              }
            }
          }
          else {
            $(this).removeClass('animated fadeInLeft fadeInRight');
          }
        });
      });

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

        //return
        return url;
      };

    // var $activePage = 'benefits-overview';
    var url = getFileName();
    var $title = url.replace(/\-/g, ' ');
    $title = $title.split(/(?=[A-Z])/).join(" ");  // -> split at the caps
    // var $upper_title = $title.toLowerCase().replace(/\b[a-z]/g, function(letter) {

      // return letter.toUpperCase();

    // });
    // console.log($title+"$title######### ##");
    // $('title').html('Thermo - ' + $title);
    // $("a[href^='"+ url +"']").addClass("current");
    if ($title === 'Enrollment Home') {
      // $('a[href^="/"]').addClass('current');
      $('#sandbox').addClass('ww-home');
    }
    else
    {
      // $("a[href^='"+ url +"']").addClass("current");
      // $("#page-header").text($upper_title);
      $('#sandbox').addClass('boo');
    };
    $('body').addClass('ww-enrollment');

    var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
      }
    };

    var page = getUrlParameter('page');

      function ww_get_content(){
        var $box = $('.ww-content');
        var file;
        var header;

        switch(page) {
            case 'HealthAssessment':
                file = 'HealthAssessment';
                header = 'Health Assessment'
                break;
            case 'Rates':
                file = 'Rates';
                header = 'Rates'
                break;
            case 'Medical-Cigna':
                file = 'Medical-Cigna';
                header = 'Medical Cigna'
                break;
            case 'AllPlanDocuments':
                file = 'AllPlanDocuments';
                header = 'All Plan Documents'
                break;
            case 'BenPlanDcos':
                file = 'BenPlanDcos';
                header = 'Benefit Enrollment Documents'
                break;
            case 'Dental':
                file = 'Dental';
                header = 'Dental'
                break;
            case 'HR-Only':
                file = 'HR-Only';
                header = 'Benefits HR Only'
                break;
            case 'Life-ADD':
                file = 'Life ADD';
                header = 'Life AD&D'
                break;
            case 'Medical-FairlawnUnion':
                file = 'Medical-FairlawnUnion';
                header = 'Fair Lawn Medical'
                break;
            case 'Medical-LocalPlans':
                file = 'Medical-LocalPlans';
                header = 'Medical Local Plans'
                break;
            case 'Prescriptions':
                file = 'Prescriptions';
                header = 'Prescriptions'
                break;
            case 'SavingsSpendingAccounts':
                file = 'SavingsSpendingAccounts';
                header = 'Savings & Spending Accounts'
                break;
            case 'SupplementalVoluntaryBenefits':
                file = 'SupplementalVoluntaryBenefits';
                header = 'Supplemental Voluntary Benefits'
                break;
            case 'Vision':
                file = 'Vision';
                header = 'Vision'
                break;
            default:
                file = 'Benefits-Overview';
                header = 'Benefits Overview'
        }
        $box.load('https://thermofisher.sharepoint.com/sites/functions/hr1/Pages/USBenefits/'+file+'.aspx .ms-rtestate-field, #WebPartWPQ5', function(){
          $('.content .ms-rtestate-field:first-child').remove();
        });
        $("#page-header").text(header);
        return;
      };
      ww_get_content();

        //Use animateCss to remove the animation immediately
      $.fn.extend({
        animateCss: function(animationName) {
          var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
          this.addClass('animated ' + animationName).one(animationEnd, function() {
            $(this).removeClass('animated ' + animationName);
          });
          return this;
        }
      });

      //Tracking Internet Explorer
      var doc = document.documentElement;
      doc.setAttribute('data-useragent', navigator.userAgent);

  });

});
