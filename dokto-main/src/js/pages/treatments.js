export function treatments() {
  return {
    modalOpen: false,
    activeCard: null,
    resetScroll() {
      window.scrollTo({ top: 350, behavior: "smooth" });
      return false;
    },
  };
}
