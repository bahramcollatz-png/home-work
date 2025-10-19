// Accessible Page Transition System (fade + slide, Tailwind-friendly)
(function () {
  const DURATION = 450;
  const EASE = "cubic-bezier(.4,0,.2,1)";
  const wrapper = document.getElementById("page-wrapper");
  if (!wrapper) return;

  // Accessibility: check prefers-reduced-motion
  const reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;
  if (reduceMotion || wrapper.hasAttribute("data-no-transition")) return;

  function runTransition(type) {
    return new Promise((resolve) => {
      wrapper.classList.remove(
        "pt-enter",
        "pt-enter-active",
        "pt-exit",
        "pt-exit-active"
      );
      wrapper.classList.add(type);
      void wrapper.offsetWidth;
      wrapper.classList.add(type + "-active");
      let ended = false;
      function cleanup() {
        if (!ended) {
          ended = true;
          wrapper.classList.remove(type, type + "-active");
          resolve();
        }
      }
      wrapper.addEventListener("transitionend", cleanup, { once: true });
      setTimeout(cleanup, DURATION + 50);
    });
  }

  function animateIn() {
    wrapper.classList.add("pt-enter");
    void wrapper.offsetWidth;
    wrapper.classList.add("pt-enter-active");
    setTimeout(() => {
      wrapper.classList.remove("pt-enter", "pt-enter-active");
    }, DURATION + 50);
  }
  window.addEventListener("DOMContentLoaded", animateIn);
  window.addEventListener("pageshow", animateIn);

  document.addEventListener("click", function (e) {
    const a = e.target.closest("a");
    if (!a) return;
    const href = a.getAttribute("href");
    if (
      a.hasAttribute("target") ||
      a.hasAttribute("download") ||
      a.hasAttribute("data-no-transition") ||
      !href ||
      href.startsWith("mailto:") ||
      href.startsWith("tel:") ||
      (href.startsWith("#") &&
        location.pathname + location.search ===
          location.pathname + location.search) ||
      e.ctrlKey ||
      e.metaKey ||
      e.shiftKey ||
      e.altKey
    )
      return;
    try {
      const url = new URL(href, location.href);
      if (url.origin !== location.origin) return;
    } catch {
      return;
    }
    e.preventDefault();
    runTransition("pt-exit").then(() => {
      window.location.href = href;
    });
  });
})();

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

