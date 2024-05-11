jQuery(document).ready(function($){
 
    
    var HHeight = $("header.header").outerHeight();
    $('body').css('margin-top',HHeight);

    $(window).scroll(function () {
		if ($(this).scrollTop() > HHeight ) {
			$('header.header').addClass('fixed');
            $('.hdttop').css('margin-bottom');
		} else {
			$('header.header').removeClass('fixed');
		}
	});
  
    $(".mnutog").click(function(){
      $("nav.nav").addClass("active");
      $('body').addClass('overflow-hidden');
    });
    $(".mnuclsinr, .mnucls").click(function(){
        $("nav.nav").removeClass("active");
        $('body').removeClass('overflow-hidden');
    });
    
    $('#search-menu').removeClass('toggled');

	$('.search-icon').click(function(e) {
		e.stopPropagation();
		$('#search-menu').toggleClass('toggled');
		$("#popup-search").focus();
	});
	
	$('#search-menu input').click(function(e) {
		e.stopPropagation();
	});

	$('#search-menu, body').click(function() {
		$('#search-menu').removeClass('toggled');
	});

  $(".filterclick").click(function(){
    $(".sidebar").addClass("active");
});
$(".filtercls").click(function(){
    $(".sidebar").removeClass("active");
});

$(".listclick").click(() =>{
    $('.listclick').addClass('active');
    $('.gridclick').removeClass('active');
    $(".productlistwrp").addClass("listview");
    $(".productlistwrp").removeClass("gridview");
});
$(".gridclick").click(() =>{
    $('.gridclick').addClass('active');
    $('.listclick').removeClass('active');
    $(".productlistwrp").addClass("gridview");
    $(".productlistwrp").removeClass("listview");
});




    var $animation_elements = $('.imageeffect .wp-block-image, .fadezoomIn, .fadeLeft, .fadeUp, .fadeRight, .fadePopup, .leftSlide');
    var $window = $(window);
    function check_if_in_view() {
        var window_height = $window.height();
        var window_top_position = $window.scrollTop();
        var window_bottom_position = (window_top_position + window_height);
        $.each($animation_elements, function() {
        var $element = $(this);
        var element_height = $element.outerHeight();
        var element_top_position = $element.offset().top;
        var element_bottom_position = (element_top_position + element_height);
        if ((element_bottom_position >= window_top_position) &&
            (element_top_position <= window_bottom_position)) {
            $element.addClass('in-view');
        } else {
            $element.removeClass('in-view');
        }
        });
    }
    $window.on('scroll resize', check_if_in_view);
    $window.trigger('scroll');
          // Masonry Grid
          $('.grid').isotope({
            filter: '*',
            // itemSelector: '.grid-item',
            masonry: {
              columnWidth: 370,
              fitWidth: true,
              gutter: 10
            }
          });

          $(window).on('resize', function () {
            $('.grid').isotope('layout');
          });
        
          $('.filter a').click(function(){
            $('.filter .current').removeClass('current');
            $(this).addClass('current');
        
            var selector = $(this).data('filter');
            $('.grid').isotope({
              filter: selector
            });
            return false;
          });
        
        $('[data-fancybox="gallery"]').fancybox({
            // Options will go here
            });

            if ($(window).width() < 767) {
              $(".ftrtop ul.collapse").removeClass("show");
            }

});




    var swiper = new Swiper(".slide3", {
        slidesPerView: 3,

          pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
        breakpoints: {
            319: {
              slidesPerView:1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView:2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 15,
            }
        },
      });

      
      var swiper = new Swiper(".slide4", {
        slidesPerView: 4,
        spaceBetween: 15,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });

      var swiper = new Swiper(".prodsmlslide", {
        loop: true,
        spaceBetween: 10,
        slidesPerView: 4,
        freeMode: true,
        watchSlidesProgress: true,
      });
      var swiper2 = new Swiper(".prodlgslide", {
        loop: true,
        spaceBetween: 10,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        thumbs: {
          swiper: swiper,
        },
      });



      
      var swiper = new Swiper(".homeslider", {
        speed: 800,
        parallax: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: true,
      },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
 

   
