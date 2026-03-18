export const addDotButtonAndClickHandlers = (emblaApi, dotsNode) => {
  let dotNodes = []

  const addDotBtnsWithClickHandlers = () => {
    // Obtener el número de slides
    const slideCount = emblaApi.slideNodes?.()?.length ?? 
                      emblaApi.slideNodes?.length ?? 
                      document.querySelectorAll('.embla__slide').length
    
    // Crear los puntos basado en el número de slides
    dotsNode.innerHTML = Array.from({ length: slideCount })
      .map(() => '<button class="embla__dot" type="button"></button>')
      .join('')

    const scrollTo = (index) => {
      // Compatibilidad: scrollTo es el método de Embla v8
      if (emblaApi.scrollTo) {
        emblaApi.scrollTo(index)
      } else if (emblaApi.goTo) {
        emblaApi.goTo(index)
      }
    }

    dotNodes = Array.from(dotsNode.querySelectorAll('.embla__dot'))
    dotNodes.forEach((dotNode, index) => {
      dotNode.addEventListener('click', () => scrollTo(index), false)
    })
  }

  const toggleDotButtonsActive = () => {
    // Compatibilidad: selectedSnap y previousSnap
    const previous = emblaApi.previousSnap?.() ?? 0
    const selected = emblaApi.selectedSnap?.() ?? 0
    
    if (dotNodes[previous]) {
      dotNodes[previous].classList.remove('embla__dot--selected')
    }
    if (dotNodes[selected]) {
      dotNodes[selected].classList.add('embla__dot--selected')
    }
  }

  addDotBtnsWithClickHandlers()
  toggleDotButtonsActive()

  emblaApi
    .on('reinit', addDotBtnsWithClickHandlers)
    .on('reinit', toggleDotButtonsActive)
    .on('select', toggleDotButtonsActive)
}
