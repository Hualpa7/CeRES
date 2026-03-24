// Scroll-based animations for sections
document.addEventListener("DOMContentLoaded", () => {
  // Check if the browser supports Intersection Observer
  const hasIntersectionObserver = "IntersectionObserver" in window;

  if (!hasIntersectionObserver) {
    // Fallback: simply show all fade-in-section elements
    document.querySelectorAll(".fade-in-section").forEach((el) => {
      el.style.animation = "fadeInUp 0.8s ease-out forwards";
    });
    return;
  }

  // Use Intersection Observer for better performance
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.animationPlayState = "running";
          // Optional: unobserve after animation completes
          // observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: "0px 0px -100px 0px",
    }
  );

  // Observe all fade-in-section elements
  document.querySelectorAll(".fade-in-section").forEach((el) => {
    el.style.animationPlayState = "paused";
    observer.observe(el);
  });

  // Cleanup on page unload
  window.addEventListener("unload", () => {
    observer.disconnect();
  });
});

// Optional: Add scroll event listener for additional effects
document.addEventListener("scroll", () => {
  // You can add additional scroll-based effects here if needed
  // For example, parallax effects or progress indicators
});
