/* EVO Private Barber Menorca — interactions */
(function () {
  "use strict";

  /* Wrap heading words so each word gets its own chrome gradient */
  function wrapMetalWords(el) {
    if (!el || el.classList.contains("metal-words")) return;
    if (el.querySelector(".metal-word")) return;
    /* Only plain-text headings (skip ones that already contain markup) */
    if (el.children.length > 0) return;
    var text = el.textContent;
    if (!text || !text.trim()) return;
    var html = text.replace(/(\S+)(\s*)/g, function (_, word, space) {
      return '<span class="metal-word">' + word + "</span>" + space;
    });
    el.innerHTML = html;
    el.classList.add("metal-words");
  }

  document.querySelectorAll("h1, h2, h3, .metal-text, .display").forEach(wrapMetalWords);

  /* Nav scroll state */
  var nav = document.querySelector(".nav");
  function onScroll() {
    if (nav) nav.classList.toggle("scrolled", window.scrollY > 30);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* Mobile menu */
  var burger = document.querySelector(".burger");
  var mobileMenu = document.querySelector(".mobile-menu");
  if (burger && mobileMenu) {
    burger.addEventListener("click", function () {
      var open = mobileMenu.classList.toggle("open");
      burger.classList.toggle("open", open);
      document.body.style.overflow = open ? "hidden" : "";
    });
    mobileMenu.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        mobileMenu.classList.remove("open");
        burger.classList.remove("open");
        document.body.style.overflow = "";
      });
    });
  }

  /* Scroll reveal */
  var revealEls = document.querySelectorAll("[data-reveal]");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("visible"); });
  }

  /* Subtle hero parallax */
  var heroBg = document.querySelector(".hero-bg");
  if (heroBg && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    window.addEventListener(
      "scroll",
      function () {
        var y = window.scrollY;
        if (y < window.innerHeight * 1.2) {
          heroBg.style.transform = "translateY(" + y * 0.25 + "px)";
        }
      },
      { passive: true }
    );
  }

  /* FAQ accordion */
  document.querySelectorAll(".faq-item").forEach(function (item) {
    var q = item.querySelector(".faq-q");
    var a = item.querySelector(".faq-a");
    if (!q || !a) return;
    q.addEventListener("click", function () {
      var isOpen = item.classList.contains("open");
      document.querySelectorAll(".faq-item.open").forEach(function (other) {
        other.classList.remove("open");
        other.querySelector(".faq-a").style.maxHeight = null;
      });
      if (!isOpen) {
        item.classList.add("open");
        a.style.maxHeight = a.scrollHeight + "px";
      }
    });
  });

})();
