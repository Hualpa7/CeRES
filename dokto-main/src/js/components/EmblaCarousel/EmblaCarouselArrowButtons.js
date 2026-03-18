const addTogglePrevNextButtonsActive = (emblaApi, prevBtn, nextBtn) => {
  const togglePrevNextButtonsState = () => {
    // Compatibilidad con Embla v8: usar canScrollPrev/canScrollNext
    const canScrollPrev = emblaApi.canScrollPrev?.() ?? emblaApi.canGoToPrev?.() ?? false
    const canScrollNext = emblaApi.canScrollNext?.() ?? emblaApi.canGoToNext?.() ?? false

    if (canScrollPrev) {
      prevBtn.classList.remove('embla__button--disabled')
    } else {
      prevBtn.classList.add('embla__button--disabled')
    }

    if (canScrollNext) {
      nextBtn.classList.remove('embla__button--disabled')
    } else {
      nextBtn.classList.add('embla__button--disabled')
    }
  }

  togglePrevNextButtonsState()

  emblaApi
    .on('select', togglePrevNextButtonsState)
    .on('reinit', togglePrevNextButtonsState)
}

export const addPrevNextButtonClickHandlers = (emblaApi, prevBtn, nextBtn) => {
  const scrollPrev = () => {
    // Compatibilidad: scrollPrev es el método de Embla v8
    if (emblaApi.scrollPrev) {
      emblaApi.scrollPrev()
    } else if (emblaApi.goToPrev) {
      emblaApi.goToPrev()
    }
  }
  const scrollNext = () => {
    // Compatibilidad: scrollNext es el método de Embla v8
    if (emblaApi.scrollNext) {
      emblaApi.scrollNext()
    } else if (emblaApi.goToNext) {
      emblaApi.goToNext()
    }
  }
  prevBtn.addEventListener('click', scrollPrev, false)
  nextBtn.addEventListener('click', scrollNext, false)

  addTogglePrevNextButtonsActive(emblaApi, prevBtn, nextBtn)
}
