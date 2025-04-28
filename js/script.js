$(window).on("load", function () {
  $(".loader .inner").fadeOut(500, function () {
    $(".loader").fadeOut(750);
  });

  $(".items").isotope({
    filter: "*",
    animationOptions: {
      duration: 1500,
      easing: "linear",
      queue: false,
    },
  });
});

$(document).ready(function () {
  $("#slides").superslides({
    animation: "fade",
    play: 5000,
    pagination: false,
  });

  var typed = new Typed(".typed", {
    //strings: ["Software Engineer.", "Web Developer.", "Student."],
    strings: [
      "Stolen on March 27, 2025",
      "Help us find them",
      "Write to foggia7icone-rubate@proton.me",
    ],
    typeSpeed: 70,
    backSpeed: 60,
    loop: true,
    startDelay: 1000,
    showCursor: false,
    //showCursor: true,
  });

  $(function () {
    // Owl Carousel
    var owl = $(".owl-carousel");
    owl.owlCarousel({
      items: 3,
      margin: 20,
      loop: true,
      nav: false,
      autoplay: true,
      slideSpeed: 1000,
      responsive: {
        320: {
          items: 1,
        },
        767: {
          items: 2,
        },
        600: {
          items: 2,
        },
        1000: {
          items: 3,
        },
      },
    });
  });

  /*
  $(".testmonial_slider_area").owlCarousel({
    autoplay: true,
    slideSpeed: 1000,
    items: 3,
    loop: true,
    nav: true,
    navText: [
      '<i class="fa fa-arrow-left"></i>',
      '<i class="fa fa-arrow-right"></i>',
    ],
    margin: 30,
    dots: true,
    responsive: {
      320: {
        items: 1,
      },
      767: {
        items: 2,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });
  */

  /*
  $(".owl-carousel").owlCarousel({
    loop: true,
    //margin: 10,
    //nav: true,
    items: 4,
    responsive: {
      0: {
        items: 1,
      },
      480: {
        items: 2,
      },
      768: {
        items: 3,
      },
      938: {
        items: 4,
      },
    },
  });
  */

  //$(".chart").hover(function (e) {

  //});

  var skillsTopOffset = $(".skillsSection").offset().top;
  var statsTopOffset = $(".statsSection").offset().top;
  var countUpFinished = false;
  //console.log(skillsTopOffset);
  $(window).scroll(function () {
    //console.log(window.pageYOffset);

    if (window.pageYOffset > skillsTopOffset - $(window).height() + 200) {
      $(".chart").easyPieChart({
        //animate: 6000,
        easing: "easeOutBounce",
        barColor: "#fff",
        trackColor: false,
        scaleColor: false,
        lineWidth: 4,
        size: 152,
        onStep: function (from, to, percent) {
          $(this.el).find(".percent").text(Math.round(percent));
        },
      });
    }

    if (
      !countUpFinished &&
      window.pageYOffset > statsTopOffset - $(window).height() + 200
    ) {
      $(".counter").countTo({
        from: 0,
        speed: 2000,
        refreshInterval: 50,
      });

      countUpFinished = true;
    }
  });

  // isotope was here

  $("#filters a").click(function () {
    $("#filters .current").removeClass("current");
    $(this).addClass("current");

    var selector = $(this).attr("data-filter");

    $(".items").isotope({
      filter: selector,
      animationOptions: {
        duration: 1500,
        easing: "linear",
        queue: false,
      },
    });

    return false;
  });

  // me
  // https://stackoverflow.com/questions/70325214/animate-scrolltop-laggy-on-chrome-only
  // https://github.com/twbs/bootstrap/issues/35536
  // https://stackoverflow.com/questions/9328832/how-to-apply-specific-css-rules-to-chrome-only
  if (navigator.appVersion.indexOf("Chrome/") != -1) {
    $("html").css("scroll-behavior", "auto");
  }

  $("#naviga li a").click(function (e) {
    e.preventDefault();

    var targetElement = $(this).attr("href");
    var targetPosition = $(targetElement).offset().top;
    $("html, body").animate({ scrollTop: targetPosition - 70 }, "slow");
  });

  /*
  $("#navigation li a").click(function (e) {
    e.preventDefault();

    var targetElement = $(this).attr("href");
    var targetPosition = $(targetElement).offset().top;
    $("html, body").animate({ scrollTop: targetPosition - 70 }, "slow");
  });

  const nav = $("#navigation");
  const navTop = nav.offset().top;

  $(window).on("scroll", stickyNavigation);

  function stickyNavigation() {
    var body = $("body");
    if ($(window).scrollTop() >= navTop) {
      body.css("padding-top", nav.outerHeight() + "px");
      body.addClass("fixedNav");
    } else {
      body.css("padding-top", 0);
      body.removeClass("fixedNav");
    }
  }
  */
});
