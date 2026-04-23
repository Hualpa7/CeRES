// Script para animar elementos al hacer scroll
document.addEventListener("DOMContentLoaded", () => {
  // Esperar un poco para asegurar que el DOM está completamente listo
  setTimeout(() => {
    // Crear Intersection Observer para detectar elementos visibles
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "20px 0px -10px 0px" 
    };

     const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          entry.target.classList.remove("out-view");
        } else {
          entry.target.classList.remove("in-view");
          entry.target.classList.add("out-view");
        }
      });
    }, observerOptions);

    // Observar TODAS las clases de animación
    const selector = [
      ".animate-on-scroll",
      ".animate-from-right",
      ".animate-from-left",
      ".animate-fade",
      ".animate-scale",
      ".animate-pricing-card",
      ".animate-fade-largue"
    ].join(", ");

    document.querySelectorAll(selector).forEach((el, i) => {
      // Stagger automático para hermanos dentro del mismo padre
      const siblings = el.parentElement?.querySelectorAll(selector);
      if (siblings && siblings.length > 1) {
        const idx = Array.from(siblings).indexOf(el);
        el.style.animationDelay = `${idx * 0.1}s`;
      }
      observer.observe(el);
    });

    window.addEventListener("unload", () => observer.disconnect());
  }, 100);
});
