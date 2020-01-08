window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    document.querySelector("header").classList.add("shrink");
    // document.querySelector('#portfolio').classList.add('shrink__portfolio');
  } else {
    document.querySelector("header").classList.remove("shrink");
    // document.querySelector('#portfolio').classList.remove('shrink__portfolio');
  }
}

// Custom cookie notify
// check if cookies are saved in storage
function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  var expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";

  document.querySelector(".cookies__notify").remove();
}
function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function checkCookie() {
  var notify = getCookie("cookieClose");
  if (notify != "") {
    document.querySelector(".cookies__notify").remove();
  } else {
    document.querySelector(".cookies__notify").style.display = "block";
  }
}

checkCookie();

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

$(document).ready(function() {
  jQuery.scrollSpeed(200, 100, 100);

  // $(".work__project a").on("click", function(e) {
  //   e.preventDefault();
  //   window.open($(this).attr("href"), "_blank");
  // });

  // $(".work__project").on("click", function(e) {
  //   e.preventDefault();
  //   var checkDiv = $(this).children(".details__description");

  //   if (checkDiv.hasClass("details__description__active")) {
  //     checkDiv.removeClass("details__description__active");
  //   } else {
  //     checkDiv.addClass("details__description__active");
  //   }
  // });
});

// Custom scrolling speed with jQuery
// Source: github.com/ByNathan/jQuery.scrollSpeed
// Version: 1.0.2

(function($) {
  jQuery.scrollSpeed = function(step, speed, easing) {
    var $document = $(document),
      $window = $(window),
      $body = $("html, body"),
      option = easing || "default",
      root = 0,
      scroll = false,
      scrollY,
      scrollX,
      view;

    if (window.navigator.msPointerEnabled) return false;

    $window
      .on("mousewheel DOMMouseScroll", function(e) {
        var deltaY = e.originalEvent.wheelDeltaY,
          detail = e.originalEvent.detail;
        scrollY = $document.height() > $window.height();
        scrollX = $document.width() > $window.width();
        scroll = true;

        if (scrollY) {
          view = $window.height();

          if (deltaY < 0 || detail > 0)
            root = root + view >= $document.height() ? root : (root += step);

          if (deltaY > 0 || detail < 0) root = root <= 0 ? 0 : (root -= step);

          $body.stop().animate(
            {
              scrollTop: root
            },
            speed,
            option,
            function() {
              scroll = false;
            }
          );
        }

        if (scrollX) {
          view = $window.width();

          if (deltaY < 0 || detail > 0)
            root = root + view >= $document.width() ? root : (root += step);

          if (deltaY > 0 || detail < 0) root = root <= 0 ? 0 : (root -= step);

          $body.stop().animate(
            {
              scrollLeft: root
            },
            speed,
            option,
            function() {
              scroll = false;
            }
          );
        }

        return false;
      })
      .on("scroll", function() {
        if (scrollY && !scroll) root = $window.scrollTop();
        if (scrollX && !scroll) root = $window.scrollLeft();
      })
      .on("resize", function() {
        if (scrollY && !scroll) view = $window.height();
        if (scrollX && !scroll) view = $window.width();
      });
  };

  jQuery.easing.default = function(x, t, b, c, d) {
    return -c * ((t = t / d - 1) * t * t * t - 1) + b;
  };
})(jQuery);
