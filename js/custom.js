(function($) {
  "use strict";
  /*---------gallery isotope js-----------*/
  function galleryMasonry() {
    if ($("#gallery").length) {
      $("#gallery").imagesLoaded(function() {
        // images have loaded
        $("#gallery").isotope({
          itemSelector: ".gallery-item",
          layoutMode: "masonry",
          animationOptions: {
            duration: 750,
            easing: "linear"
          }
        });

        // Add isotope click function
        $(".gallery-filter li").on("click", function() {
          $(".gallery-filter li").removeClass("active");
          $(this).addClass("active");

          var selector = $(this).attr("data-filter");
          $("#gallery").isotope({
            filter: selector,
            animationOptions: {
              animationDuration: 750,
              easing: "linear",
              queue: false
            }
          });
          return false;
        });
      });
    }
  }
  galleryMasonry();

  /*=========== blog slider js ===========*/
  function blogSlider() {
    if ($(".blog_slider").length) {
      $(".blog_slider").owlCarousel({
        loop: true,
        margin: 30,
        items: 3,
        nav: false,
        autoplay: false,
        dots: false,
        smartSpeed: 1500,
        responsiveClass: true,
        responsive: {
          0: {
            items: 1,
            stagePadding: 0
          },
          650: {
            items: 1,
            stagePadding: 0
          },
          768: {
            items: 2,
            stagePadding: 0
          },
          1199: {
            items: 3
          }
        }
      });
    }
  }
  blogSlider();

  /*=========== blog slider js ===========*/

  /*----------------------------------------------------*/
  /*  Google map js
    /*----------------------------------------------------*/

  if ($("#mapBox").length) {
    var $lat = $("#mapBox").data("lat");
    var $lon = $("#mapBox").data("lon");
    var $zoom = $("#mapBox").data("zoom");
    var $marker = $("#mapBox").data("marker");
    var $info = $("#mapBox").data("info");
    var $markerLat = $("#mapBox").data("mlat");
    var $markerLon = $("#mapBox").data("mlon");
    var map = new GMaps({
      el: "#mapBox",
      lat: $lat,
      lng: $lon,
      scrollwheel: false,
      scaleControl: true,
      streetViewControl: false,
      panControl: true,
      disableDoubleClickZoom: true,
      mapTypeControl: false,
      zoom: $zoom,
      styles: [
        {
          featureType: "administrative.country",
          elementType: "geometry",
          stylers: [
            {
              visibility: "simplified"
            },
            {
              hue: "#ff0000"
            }
          ]
        }
      ]
    });

    map.addMarker({
      lat: $markerLat,
      lng: $markerLon,
      icon: $marker,
      infoWindow: {
        content: $info
      }
    });
  }

  // Mobile menu
  $(".menu-toggle").on("click", function() {
    $(".header_area").toggleClass("mobile-menu-hide");
    $(".menu-toggle").toggleClass("open");
  });

  /*=============================================== 
      Video js
    ================================================*/
  function bgVideo() {
    $("#bgndVideo").YTPlayer();
  }
  bgVideo();

  /*=========animation js =========*/
  function bodyScrollAnimation() {
    var scrollAnimate = $("body").data("scroll-animation");
    if ($(window).width() > 576) {
      new WOW({
        animateClass: "animated", // animation css class (default is animated)
        offset: 100, // distance to the element when triggering the animation (default is 0)
        mobile: true,
        duration: 1000
      }).init();
    }
  }
  bodyScrollAnimation();

  $(".slideshow_slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    infinite: true,
    touchMove: false,
    pauseOnHover: false,
    fade: true,
    speed: 800,
    autoplaySpeed: 1500,
    useTransform: true,
    cssEase: "cubic-bezier(0.645, 0.045, 0.355, 1.000)",
    adaptiveHeight: true
  });

  // preloader js
  $(window).on("load", function() {
    // makes sure the whole site is loaded
    $(".sampleContainer").fadeOut(); // will first fade out the loading animation
    $(".loader")
      .delay(150)
      .fadeOut("slow"); // will fade out the white DIV that covers the website.
    $("body")
      .delay(150)
      .css({ overflow: "visible" });
  });

  $(".menu li a").on("click", function() {
    $(".menu li a").removeClass("active");
    $(this).addClass("active");
    var tagid = $(this).attr("href");
    $(".pt-page").removeClass("pt-page-current");
    $("" + tagid).addClass("pt-page-current");
  });
})(jQuery);
