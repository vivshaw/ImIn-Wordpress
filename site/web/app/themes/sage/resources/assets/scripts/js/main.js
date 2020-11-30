////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// jQuery
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
$(document).ready(function ($) {
  "use strict";

  if (document.getElementsByClassName("ts-full-screen").length) {
    document.getElementsByClassName("ts-full-screen")[0].style.height =
      window.innerHeight + "px";
  }

  $(".navbar-nav .nav-link").on("click", function () {
    $(".navbar-collapse").collapse("hide");
  });

  $(".ts-img-into-bg").each(function () {
    $(this).css(
      "background-image",
      "url(" + $(this).find("img").attr("src") + ")"
    );
  });

  //  Background

  $("[data-bg-color], [data-bg-image]").each(function () {
    var $this = $(this);

    if ($this.hasClass("ts-separate-bg-element")) {
      $this.append('<div class="ts-background">');

      // Background Color

      if ($("[data-bg-color]")) {
        $this
          .find(".ts-background")
          .css("background-color", $this.attr("data-bg-color"));
      }

      // Background Image

      if ($this.attr("data-bg-image") !== undefined) {
        $this
          .find(".ts-background")
          .append('<div class="ts-background-image">');
        $this
          .find(".ts-background-image")
          .css("background-image", "url(" + $this.attr("data-bg-image") + ")");
        $this
          .find(".ts-background-image")
          .css("background-size", $this.attr("data-bg-size"));
        $this
          .find(".ts-background-image")
          .css("background-position", $this.attr("data-bg-position"));
        $this
          .find(".ts-background-image")
          .css("opacity", $this.attr("data-bg-image-opacity"));

        $this
          .find(".ts-background-image")
          .css("background-size", $this.attr("data-bg-size"));
        $this
          .find(".ts-background-image")
          .css("background-repeat", $this.attr("data-bg-repeat"));
        $this
          .find(".ts-background-image")
          .css("background-position", $this.attr("data-bg-position"));
        $this
          .find(".ts-background-image")
          .css("background-blend-mode", $this.attr("data-bg-blend-mode"));
      }

      // Parallax effect

      if ($this.attr("data-bg-parallax") !== undefined) {
        $this.find(".ts-background-image").addClass("ts-parallax-element");
      }
    } else {
      if ($this.attr("data-bg-color") !== undefined) {
        $this.css("background-color", $this.attr("data-bg-color"));
        if ($this.hasClass("btn")) {
          $this.css("border-color", $this.attr("data-bg-color"));
        }
      }

      if ($this.attr("data-bg-image") !== undefined) {
        $this.css(
          "background-image",
          "url(" + $this.attr("data-bg-image") + ")"
        );

        $this.css("background-size", $this.attr("data-bg-size"));
        $this.css("background-repeat", $this.attr("data-bg-repeat"));
        $this.css("background-position", $this.attr("data-bg-position"));
        $this.css("background-blend-mode", $this.attr("data-bg-blend-mode"));
      }
    }
  });

  //  Parallax Background Image
  $("[data-bg-parallax='scroll']").each(function () {
    var speed = $(this).attr("data-bg-parallax-speed");
    var $this = $(this);
    var isVisible;

    $this.isInViewport(function (status) {
      if (status === "entered") {
        isVisible = 1;
        var position;

        $(window).scroll(function () {
          if (isVisible === 1) {
            position = $(window).scrollTop() - $this.offset().top;
            if (
              $this.find(".ts-parallax-element").hasClass("ts-background-image")
            ) {
              $this
                .find(".ts-background-image.ts-parallax-element")
                .css("background-position-y", position / speed + "px");
            } else {
              $this
                .find(".ts-parallax-element")
                .css("transform", "translateY(" + position / speed + "px)");
            }
          }
        });
      }
      if (status === "leaved") {
        isVisible = 0;
      }
    });
  });

  // Owl Carousel

  var $owlCarousel = $(".owl-carousel");

  if ($owlCarousel.length) {
    $owlCarousel.each(function () {
      var items = parseInt($(this).attr("data-owl-items"), 10);
      if (!items) items = 1;

      var nav = parseInt($(this).attr("data-owl-nav"), 2);
      if (!nav) nav = 0;

      var dots = parseInt($(this).attr("data-owl-dots"), 2);
      if (!dots) dots = 0;

      var center = parseInt($(this).attr("data-owl-center"), 2);
      if (!center) center = 0;

      var loop = parseInt($(this).attr("data-owl-loop"), 2);
      if (!loop) loop = 0;

      var margin = parseInt($(this).attr("data-owl-margin"), 2);
      if (!margin) margin = 0;

      var autoWidth = parseInt($(this).attr("data-owl-auto-width"), 2);
      if (!autoWidth) autoWidth = 0;

      var navContainer = $(this).attr("data-owl-nav-container");
      if (!navContainer) navContainer = 0;

      var autoplay = parseInt($(this).attr("data-owl-autoplay"), 2);
      if (!autoplay) autoplay = 0;

      var autoplayTimeOut = parseInt(
        $(this).attr("data-owl-autoplay-timeout"),
        10
      );
      if (!autoplayTimeOut) autoplayTimeOut = 5000;

      var autoHeight = parseInt($(this).attr("data-owl-auto-height"), 2);
      if (!autoHeight) autoHeight = 0;

      var fadeOut = $(this).attr("data-owl-fadeout");
      if (!fadeOut) fadeOut = 0;
      else fadeOut = "fadeOut";

      if ($("body").hasClass("rtl")) var rtl = true;
      else rtl = false;

      if (items === 1) {
        $(this).owlCarousel({
          navContainer: navContainer,
          animateOut: fadeOut,
          autoplayTimeout: autoplayTimeOut,
          autoplay: 1,
          autoheight: autoHeight,
          center: center,
          loop: loop,
          margin: margin,
          autoWidth: autoWidth,
          items: 1,
          nav: nav,
          dots: dots,
          rtl: rtl,
          navText: [],
        });
      } else {
        $(this).owlCarousel({
          navContainer: navContainer,
          animateOut: fadeOut,
          autoplayTimeout: autoplayTimeOut,
          autoplay: autoplay,
          autoHeight: autoHeight,
          center: center,
          loop: loop,
          margin: margin,
          autoWidth: autoWidth,
          items: 1,
          nav: nav,
          dots: dots,
          rtl: rtl,
          navText: [],
          responsive: {
            1199: {
              items: items,
            },
            992: {
              items: 3,
            },
            768: {
              items: 2,
            },
            0: {
              items: 1,
            },
          },
        });
      }

      if ($(this).find(".owl-item").length === 1) {
        $(this).find(".owl-nav").css({ opacity: 0, "pointer-events": "none" });
      }
    });
  }

  // On RESIZE actions

  var resizeId;

  $(window).on("resize", function () {
    clearTimeout(resizeId);
    resizeId = setTimeout(doneResizing, 250);
  });

  // On SCROLL actions

  $(window).on("scroll", function () {
    if ($(window).scrollTop() > 400) {
      $(".navbar.fadeEffect").addClass("in");
    } else {
      $(".navbar.fadeEffect").removeClass("in");
    }
  });
});

// Do after resize

function doneResizing() {
  heroHeight();
  $(".owl-carousel").trigger("next.owl.carousel");
}

// Set Hero height

function heroHeight() {
  $(".ts-full-screen").height($(window).height());
}

// Smooth Scroll

$(".ts-scroll").on("click", function (event) {
  if (
    location.pathname.replace(/^\//, "") === this.pathname.replace(/^\//, "") &&
    location.hostname === this.hostname
  ) {
    var target = $(this.hash);
    target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
    if (target.length) {
      event.preventDefault();
      $("html, body").animate(
        {
          scrollTop: target.offset().top,
        },
        1000,
        function () {
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) {
            return false;
          } else {
            $target.attr("tabindex", "-1");
            $target.focus();
          }
        }
      );
    }
  }
});
