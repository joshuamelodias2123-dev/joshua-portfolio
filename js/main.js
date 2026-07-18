/* ==========================================================================
   Joshua Melodias — Portfolio
   Plain JavaScript, no dependencies. Four small features:
   1. Mobile navigation toggle
   2. Header shadow on scroll
   3. Scroll-reveal animations (respects reduced-motion)
   4. Contact form → opens the visitor's email app with the message pre-filled
   ========================================================================== */

(function () {
  "use strict";

  /* ---------- 1. Mobile navigation ---------- */
  var toggle = document.querySelector(".nav-toggle");
  var links = document.getElementById("nav-links");

  if (toggle && links) {
    var setMenu = function (open) {
      links.classList.toggle("is-open", open);
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    };

    toggle.addEventListener("click", function () {
      setMenu(!links.classList.contains("is-open"));
    });

    // Close the menu after tapping any link (mobile UX)
    links.addEventListener("click", function (e) {
      if (e.target.tagName === "A") setMenu(false);
    });

    // Close on Escape for keyboard users
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && links.classList.contains("is-open")) {
        setMenu(false);
        toggle.focus();
      }
    });
  }

  /* ---------- 2. Header shadow on scroll ---------- */
  var header = document.querySelector(".site-header");
  if (header) {
    var onScroll = function () {
      header.classList.toggle("is-scrolled", window.scrollY > 8);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  /* ---------- 3. Scroll-reveal ---------- */
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var revealEls = document.querySelectorAll(".reveal");

  if (!reduceMotion && "IntersectionObserver" in window) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    revealEls.forEach(function (el) { observer.observe(el); });
  } else {
    // No animation support or user prefers reduced motion: show everything
    revealEls.forEach(function (el) { el.classList.add("is-visible"); });
  }

  /* ---------- 4. Contact form ---------- */
  // Builds a mailto: link so the form works with zero backend.
  // See README.md for the 5-minute upgrade to Formspree (delivers straight
  // to your inbox without opening the visitor's email app).
  var form = document.getElementById("contact-form");
  var status = document.getElementById("form-status");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      var name = document.getElementById("cf-name").value.trim();
      var email = document.getElementById("cf-email").value.trim();
      var subject = document.getElementById("cf-subject").value.trim();
      var message = document.getElementById("cf-message").value.trim();

      // Simple validation with a friendly message
      if (!name || !email || !subject || !message) {
        status.textContent = "Please fill in every field before sending.";
        return;
      }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        status.textContent = "That email address doesn't look right — mind double-checking it?";
        return;
      }

      var body =
        "Hi Joshua,\n\n" + message + "\n\n— " + name + "\n" + email;

      var mailto =
        "mailto:joshua.melodias2123@gmail.com" +
        "?subject=" + encodeURIComponent("[Portfolio] " + subject) +
        "&body=" + encodeURIComponent(body);

      window.location.href = mailto;
      status.textContent =
        "Your email app should open with the message ready to send. If it didn't, email me directly at joshua.melodias2123@gmail.com.";
    });
  }

  /* ---------- Footer year ---------- */
  var year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());
})();
