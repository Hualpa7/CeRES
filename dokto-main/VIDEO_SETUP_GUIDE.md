# Guía de Configuración de Video Hero

## Cambios Realizados

### 1. **HeroMain.astro** - Reemplazo de imagen por video
Se ha actualizado el componente hero para usar **videos en lugar de imágenes SVG estáticas**. 

**Ventajas de usar video:**
- ✅ Mejor experiencia visual y engagement
- ✅ Más rápido que GIF
- ✅ Mejor rendimiento que YouTube embebido
- ✅ Control total sobre la reproducción
- ✅ Soporte para diferentes formatos (MP4, WebM)
- ✅ Fallback a imagen si el video no carga

### 2. **Estructura actual**
```html
<!-- Video Mode Light -->
<video autoplay muted loop playsinline>
  <source src="/videos/hero.mp4" type="video/mp4" />
  <source src="/videos/hero.webm" type="video/webm" />
  <!-- Fallback a imagen -->
  <img src="/img/illustrations/hero.svg" alt="Hero image" />
</video>

<!-- Video Mode Dark -->
<video autoplay muted loop playsinline>
  <source src="/videos/hero-dark.mp4" type="video/mp4" />
  <source src="/videos/hero-dark.webm" type="video/webm" />
  <!-- Fallback a imagen -->
  <img src="/img/illustrations/hero-dark.svg" alt="Hero image" />
</video>
```

## ¿Qué necesitas hacer?

### Opción A: Usar Videos Locales (Recomendado)

1. **Prepara tus videos:**
   - Crea los videos `hero.mp4` y `hero-dark.mp4`
   - Recomendaciones:
     - **Formato:** MP4 (H.264) + WebM (VP8/VP9)
     - **Resolución:** 1280x720px (adaptable)
     - **Duración:** 3-5 segundos (será en loop)
     - **Tamaño:** Máximo 2-3MB por video
     - **Bitrate:** 2000-3000 kbps para MP4

2. **Ubicación de archivos:**
   ```
   public/
     └── videos/
         ├── hero.mp4
         ├── hero.webm
         ├── hero-dark.mp4
         └── hero-dark.webm
   ```

3. **Herramientas para convertir videos:**
   - **FFmpeg** (línea de comandos):
     ```bash
     # MP4 optimizado para web
     ffmpeg -i input.mov -c:v libx264 -preset slow -crf 23 -c:a aac -b:a 128k hero.mp4
     
     # WebM para mejor compatibilidad
     ffmpeg -i input.mov -c:v libvpx-vp9 -b:v 2000k -c:a libopus -b:a 128k hero.webm
     ```
   - **Online:** TinyWow, CloudConvert, HandBrake (GUI)

### Opción B: Usar YouTube Embebido

Si prefieres YouTube, actualiza HeroMain.astro:
```html
<iframe
  class="w-full ltablet:max-w-[540px] max-w-[620px] mx-auto rounded-lg"
  width="560"
  height="315"
  src="https://www.youtube.com/embed/VIDEO_ID?autoplay=1&mute=1&loop=1&playlist=VIDEO_ID"
  title="Hero Video"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen>
</iframe>
```

### Opción C: Usar GIF

Si necesitas GIF (menos óptimo):
```html
<img
  src="/img/illustrations/hero.gif"
  class="block dark:hidden w-full ltablet:max-w-[540px] max-w-[620px] mx-auto rounded-lg"
  alt="Hero animation"
/>
```

## Transiciones Fade Entre Secciones

### Cambios Realizados

Se han agregado transiciones **fade-in suave** cuando desplazas por las secciones:

1. **CSS Animations** (main.css):
   - `fadeInUp`: Aparece con pequeña subida
   - `fadeInSoft`: Solo fade suave

2. **Secciones con animación:**
   - ✅ Servicios (Que tratamos)
   - ✅ Equipo (Nuestros Doctores)
   - ✅ Tratamientos/Terapias (SideStatsRight)
   - ✅ Tarifas/Precios
   - ✅ Instalaciones
   - ✅ CTA (Call to Action)

3. **Cómo funcionan:**
   - Se activan cuando entran en el viewport (pantalla visible)
   - Usan `animation-timeline: view()` (CSS Scroll-driven Animations)
   - Fallback a Intersection Observer en navegadores antiguos

### Personalización

Si quieres cambiar el tipo de transición, edita `src/styles/main.css`:

```css
/* Transición más rápida */
.fade-in-section {
  animation: fadeInUp 0.5s ease-out forwards; /* Reducir de 0.8s a 0.5s */
}

/* Transición más lenta */
.fade-in-section {
  animation: fadeInUp 1.2s ease-out forwards; /* Aumentar a 1.2s */
}

/* Solo fade sin movimiento */
<div class="fade-in-soft"> <!-- usa fadeInSoft en lugar de fadeInUp -->
```

## Navegadores Soportados

| Característica | Soporte |
|---|---|
| Videos MP4 | ✅ Todos (IE11+) |
| Videos WebM | ✅ Chrome, Firefox, Edge |
| CSS Scroll Animations | ✅ Chrome 115+, Edge 115+ |
| Fallback Intersection Observer | ✅ Todos (IE Polyfill) |

## Optimización SEO

Para mejor SEO con videos, agrega:

```html
<!-- En el head del layout -->
<meta property="og:video" content="https://tu-sitio.com/videos/hero.mp4">
<meta property="og:video:type" content="video/mp4">
<meta property="og:video:width" content="1280">
<meta property="og:video:height" content="720">
```

## Performance Checklist

- [ ] Videos optimizados (< 3MB)
- [ ] Formato MP4 + WebM
- [ ] Atributos: `autoplay`, `muted`, `loop`, `playsinline`
- [ ] Fallback a imagen SVG
- [ ] Prueba en móvil (requiere `playsinline`)
- [ ] Prueba en navegadores antiguos

¡Listo! El sitio ahora tiene transiciones fluidas y está preparado para videos. 🎬
