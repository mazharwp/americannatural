import $ from "jquery";
import "owl.carousel";
import "owl.carousel/dist/assets/owl.carousel.css";

export function initCustomScripts() {

  // DOMContentLoaded part
  const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

  navLinks.forEach(link => {
    link.addEventListener("click", function () {
      navLinks.forEach(nav => nav.classList.remove("active"));
      this.classList.add("active");
    });
  });

  // Navbar scroll
  let lastScrollTop = 0;
  const navbar = document.querySelector('.navbar');
  let scrollTimeout;

  window.addEventListener('scroll', function() {
    clearTimeout(scrollTimeout);

    scrollTimeout = setTimeout(() => {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      if (scrollTop > lastScrollTop && scrollTop > 100) {
        navbar?.classList.remove('show');
        navbar?.classList.add('hide');
      } else {
        navbar?.classList.remove('hide');
        navbar?.classList.add('show');
      }

      lastScrollTop = scrollTop;
    }, 50);
  });

  // ====== OWL SLIDERS (IMPORTANT FIX) ======

  setTimeout(() => {

    if ($(".familyOwned-box").length) {
      $(".familyOwned-box").owlCarousel({
        items: 1,
        nav: false,
        dots: true,
        loop: true,
        animateOut: 'fadeOut',
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true
      });
    }

    if ($(".product-slider").length) {
      $(".product-slider").owlCarousel({
        loop: true,
        margin: 20,
        nav: true,
        dots: false,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
        responsive:{
          0:{ items:1 },
          576:{ items:2 },
          992:{ items:3 }
        }
      });
    }

    if ($(".thumb-slider").length) {
      $(".thumb-slider").owlCarousel({
        items: 4,
        margin: 10,
        nav: false,
        dots: false
      });
    }

    if ($(".best-seller-slider").length) {
      $(".best-seller-slider").owlCarousel({
        loop: true,
        margin: 25,
        center: true,
        nav: false,
        dots: false,
        responsive: {
          0: { items: 1, stagePadding: 50 },
          600: { items: 2, stagePadding: 50 },
          1000: { items: 3 },
          1200: { items: 4 }
        }
      });
    }

  }, 500);

}