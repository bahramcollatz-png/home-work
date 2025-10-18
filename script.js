feather.replace();
VANTA.GLOBE({
  el: "#vanta-globe",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.0,
  minWidth: 200.0,
  scale: 1.0,
  scaleMobile: 1.0,
  color: 0x4f46e5,
  backgroundColor: 0x111827,
  size: 0.8,
});

// Smooth hover effects
document.querySelectorAll(".hover-grow").forEach((item) => {
  item.addEventListener("mouseenter", () => {
    item.style.transform = "scale(1.05)";
  });
  item.addEventListener("mouseleave", () => {
    item.style.transform = "scale(1)";
  });
});
// Initialize feather icons
feather.replace();

// Enhanced smooth scrolling with offset
// Smooth scroll with animation for contact section
document.querySelectorAll('a[href="#contact"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector("#contact");
    if (target) {
      const targetPosition =
        target.getBoundingClientRect().top + window.pageYOffset - 80;
      anime({
        targets: document.documentElement,
        scrollTop: targetPosition,
        duration: 800,
        easing: "easeInOutQuad",
      });
      history.pushState(null, null, "#contact");
    }
  });
});

// Smooth scroll for other sections
document
  .querySelectorAll('a[href^="#"]:not([href="#contact"])')
  .forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);
      const offset = 80; // Adjust this value to offset the scroll position

      if (targetElement) {
        const targetPosition =
          targetElement.getBoundingClientRect().top +
          window.pageYOffset -
          offset;
        anime({
          targets: document.documentElement,
          scrollTop: targetPosition,
          duration: 600,
          easing: "easeInOutQuad",
        });
        // Update URL without jumping
        if (history.pushState) {
          history.pushState(null, null, targetId);
        } else {
          location.hash = targetId;
        }
      }
    });
  });

(function () {
  const btn = document.getElementById("back-to-top");
  if (!btn) return;

  const showAt = 200; // px scrolled before showing
  let pulseTimeout;

  function checkScroll() {
    const scrolled = window.pageYOffset || document.documentElement.scrollTop;
    if (scrolled > showAt) {
      btn.classList.add("show");
      // Add one-time signal (bounce + pulse)
      btn.classList.add("signal");
      clearTimeout(pulseTimeout);
      pulseTimeout = setTimeout(() => btn.classList.remove("signal"), 3000);
    } else {
      btn.classList.remove("show");
      btn.classList.remove("signal");
    }
  }

  // Smooth scroll to top on click
  btn.addEventListener("click", function (e) {
    e.preventDefault();
    // use smooth behavior; fallback simple scroll if not supported
    if ("scrollBehavior" in document.documentElement.style) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      // simple instant fallback
      window.scrollTo(0, 0);
    }
    // hide after click
    btn.classList.remove("show");
  });

  // show/hide on scroll with throttle
  let ticking = false;
  window.addEventListener("scroll", function () {
    if (!ticking) {
      window.requestAnimationFrame(function () {
        checkScroll();
        ticking = false;
      });
      ticking = true;
    }
  });

  // initial check
  checkScroll();
})();
