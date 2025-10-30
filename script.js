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

// Language selector: native-name label + persistence
(function () {
  const STORAGE_KEY = "preferredLanguage";
  const nativeNames = {
    en: "English",
    fa: "دری",
    ps: "پښتو",
  };

  function applyLabel(langCode) {
    const labelEl = document.getElementById("lang-label");
    if (!labelEl) return;
    const name = nativeNames[langCode] || nativeNames.en;
    labelEl.textContent = name;
  }

  function getSavedLanguage() {
    try {
      return localStorage.getItem(STORAGE_KEY) || "en";
    } catch (_) {
      return "en";
    }
  }

  function saveLanguage(langCode) {
    try {
      localStorage.setItem(STORAGE_KEY, langCode);
    } catch (_) {
      // ignore
    }
  }

  document.addEventListener("DOMContentLoaded", function () {
    // Initial label from saved preference
    applyLabel(getSavedLanguage());

    // Handle option selection
    document.querySelectorAll(".lang-option").forEach((el) => {
      el.addEventListener("click", (e) => {
        const lang = el.getAttribute("data-lang") || "en";
        saveLanguage(lang);
        applyLabel(lang);
        // No preventDefault, allow navigation if href exists.
        // Since localStorage is synchronous, this will persist across navigation.
      });
      el.addEventListener("keydown", (e) => {
        // Support selecting with Space when focused
        if (e.key === " " || e.key === "Spacebar") {
          e.preventDefault();
          el.click();
        }
      });
    });

    // Close menu when clicking outside (for keyboard/mouse parity)
    const container = document.getElementById("lang-button")?.closest("[x-data]");
    if (container) {
      document.addEventListener("click", (evt) => {
        if (!container.contains(evt.target)) {
          container.__x?.updateElements?.();
        }
      });
    }
  });
})();

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
