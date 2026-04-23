## ✨ ANIMACIONES POR ELEMENTO COMPLETADAS

### 📋 Resumen

Se han implementado animaciones **fluidas y individuales** para cada elemento:
- ✅ Cada **IconBlock** de servicios aparece al scrollear
- ✅ Cada **tarjeta de doctor** aparece de forma suave
- ✅ Animación: De abajo hacia arriba (slide-in) con fade

---

### 🎯 Cómo Funciona

**Elemento 1 (Accidentes Laborales):**
```
Scroll ➜ Entra en viewport ➜ Aparece suavemente
         ↓
         opacity: 0 → 1
         transform: translateY(30px) → translateY(0)
         duración: 0.6s
```

**Elemento 2 (Lesiones Deportivas):**
```
Scroll ➜ Entra en viewport ➜ Aparece suavemente
         ↓
         Misma animación, solo cuando está visible
```

Resultado: Cada elemento aparece individualmente de forma fluida.

---

### 📁 Archivos Modificados

| Archivo | Cambio | Descripción |
|---------|--------|-------------|
| `main.css` | ✏️ Actualizado | Keyframes `slideInUp` + clases base |
| `index.astro` | ✏️ Actualizado | Clase `animate-on-scroll` en cada IconBlock |
| `Grid.astro` | ✏️ Actualizado | Clase `animate-on-scroll` en cada tarjeta doctor |
| `main.js` | ✏️ Actualizado | Importa script de animaciones |
| `animate-on-scroll.js` | ✨ Nuevo | Script Intersection Observer |

---

### 💻 CSS Utilizado

```css
/* Animación individual */
@keyframes slideInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-on-scroll {
  opacity: 0;
}

.animate-on-scroll.in-view {
  animation: slideInUp 0.6s ease-out forwards;
}
```

**Explicación:**
- `animate-on-scroll` = clase inicial (oculto)
- `in-view` = clase agregada por JavaScript cuando entra en viewport
- La animación se ejecuta solo cuando ambas clases están presentes

---

### 🚀 JavaScript

**Archivo:** `src/js/pages/animate-on-scroll.js`

```javascript
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // Agregar clase 'in-view' cuando es visible
      entry.target.classList.add("in-view");
    }
  });
}, observerOptions);

// Observar todos los elementos
document.querySelectorAll(".animate-on-scroll").forEach((element) => {
  observer.observe(element);
});
```

**¿Qué hace?**
1. Crea un "observador" que monitorea elementos
2. Cuando un elemento entra al viewport, agrega clase `in-view`
3. El CSS se encarga de activar la animación

---

### 🎨 Resultado Visual

**Sección "Que Tratamos":**
```
ScrollDown
   ↓
[Accidentes Laborales]    ✨ Aparece
   ↓
[Lesiones Deportivas]     ✨ Aparece
   ↓
[Patologías Crónicas]     ✨ Aparece
   ↓
... (Cada uno aparece cuando entra en pantalla)
```

**Sección "Equipo de Doctores":**
```
ScrollDown
   ↓
[Dr. Facundo]             ✨ Aparece
   ↓
[Lic. Laura]              ✨ Aparece
   ↓
[Lic. Jorge]              ✨ Aparece
   ↓
... (Cada tarjeta cuando es visible)
```

---

### ⚙️ Características Técnicas

- **Intersection Observer API:** Detección eficiente sin scroll listeners
- **Performance:** Solo anima elementos visibles, mejor que CSS puro
- **Reutilizable:** Puedes agregar `animate-on-scroll` a cualquier elemento
- **Sin dependencias:** JavaScript vanilla, sin librerías externas
- **Personalizable:** Cambia duración, delay, distancia fácilmente

---

### 🔧 Personalización

**Cambiar velocidad de animación:**
```css
.animate-on-scroll.in-view {
  animation: slideInUp 0.4s ease-out forwards;  /* Más rápido */
}
```

**Cambiar distancia (más arriba o abajo):**
```css
@keyframes slideInUp {
  from {
    transform: translateY(50px);  /* Más distancia */
  }
}
```

**Agregar delay entre elementos:**
```css
.animate-on-scroll:nth-child(2).in-view {
  animation-delay: 100ms;
}
.animate-on-scroll:nth-child(3).in-view {
  animation-delay: 200ms;
}
```

---

### ✅ Checklist

- [x] IconBlocks de servicios animan correctamente
- [x] Tarjetas de doctores animan al scrollear
- [x] Animaciones fluidas y suaves
- [x] Sin afectar hover effects o modales
- [x] Compatible con todos los navegadores modernos
- [x] Performance optimizado (Intersection Observer)

---

### 🌐 Soporte de Navegadores

| Navegador | Soporte |
|-----------|---------|
| Chrome 51+ | ✅ Completo |
| Firefox 55+ | ✅ Completo |
| Safari 12.1+ | ✅ Completo |
| Edge 15+ | ✅ Completo |
| IE 11 | ❌ Sin soporte |

Para IE 11, usa un polyfill de Intersection Observer.

---

¡Las animaciones por elemento están lista y funcionando! 🎉
