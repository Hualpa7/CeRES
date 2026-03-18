export function doctors() {
  return {
    activeCategory: "all",
    modalOpen: false,
    activeDoctor: null,
    resetScroll() {
      window.scrollTo({ top: 350, behavior: "smooth" });
      return false;
    },
  };
}
