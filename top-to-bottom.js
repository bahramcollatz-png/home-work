document.addEventListener("DOMContentLoaded", function () {
  const backToTopButton = document.getElementById("back-to-top");

  // Show/hide button based on scroll position
  window.addEventListener("scroll", function () {
    if (window.pageYOffset > 300) {
      backToTopButton.classList.add("show");
    } else {
      backToTopButton.classList.remove("show");
    }
  });

  // Smooth scroll to top with enhanced effect
  backToTopButton.addEventListener("click", function (e) {
    e.preventDefault();

    // Add a temporary click effect
    backToTopButton.style.transform = "scale(0.9)";
    setTimeout(() => {
      backToTopButton.style.transform = "scale(1.1)";
    }, 150);

    // Smooth scroll to top
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    // Reset transform after animation
    setTimeout(() => {
      backToTopButton.style.transform = "";
    }, 500);
  });

  // Add a subtle glow effect when button first appears
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Button is visible in viewport
        backToTopButton.style.boxShadow = "0 6px 25px rgba(99, 102, 241, 0.8)";
        setTimeout(() => {
          backToTopButton.style.boxShadow = "";
        }, 1000);
      }
    });
  });

  // Start observing the button
  if (backToTopButton) {
    observer.observe(backToTopButton);
  }
});
