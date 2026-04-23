# CeRES — Landing Page del Consultorio

> Sitio web del consultorio **CeRES**, desarrollado como una landing page moderna, accesible y responsiva para presentar los servicios, el equipo profesional y facilitar el contacto con los pacientes.

---

# Vista previa

> _Las imágenes ilustrativas se agregarán a continuación._

<!-- Reemplazá las rutas con las imágenes reales que subas al repo -->
<!-- Ejemplo:
![Hero](./assets/screenshots/hero.png)
![Servicios](./assets/screenshots/servicios.png)
-->

---

##  Secciones de la landing page

La landing page está compuesta por las siguientes secciones, dispuestas en una única página de desplazamiento continuo:

 1.  Navbar / Barra de navegación
Menú de navegación fijo en la parte superior que permite acceder rápidamente a cada sección de la página. Incluye el logotipo de CeRES y los enlaces de anclaje hacia las distintas secciones. En dispositivos móviles se colapsa en un menú hamburguesa (implementado con Alpine.js).

---

 2. Hero / Portada principal
Sección de bienvenida que ocupa el área visible al cargar la página. Presenta el nombre del consultorio, un mensaje de bienvenida o eslogan. Informacion sobre el consultorio.


[Hero](./public/img/samples/nosotros.jpg) 

---

 3. Servicios
Se detallan cada uno de los servicios que dispone el consultorio.

[Servicios](./public/img/samples/servicios.jpg) 

---

 4.  Equipo / Profesionales
Presentación del equipo de profesionales que integra CeRES. Cada integrante cuenta con su foto, nombre,  especialidad, y una breve reseña. Esta sección busca generar confianza y cercanía con los potenciales pacientes.

[Equipo](./public/img/samples/equipo1.jpg) 
[Equipo](./public/img/samples/equipo2.jpg) 

---

 5.  Tratamientos 
Grilla de tarjetas que describe los distintos tratamientos que ofrece el consultorio. Cada tarjeta se presenta en un carrusel. Seguidamente se encuentra la seccion de terapias complementarias. Permite que el paciente identifique rápidamente si el consultorio cubre su necesidad.

[Tratamientos](./public/img/samples/tratamientos1.jpg) 
[Tratamientos](./public/img/samples/tratamientos2.jpg) 


---

 6.  Instalaciones 
Se dispone de una seccion donde se presenta de forma interactiva cada una de las areas e infraestrucuturas del consultorio, presentando e invitando al posibles clientes el espacio en el cual se brindan los servicios.

[Instalaciones](./public/img/samples/instalaciones1.jpg) 
[Instalaciones](./public/img/samples/instalaciones2.jpg) 
[Instalaciones](./public/img/samples/instalaciones3.jpg) 

---


 7.  Ubicación / Mapa
Sección que muestra la ubicación física del consultorio, ya sea mediante un mapa embebido (Google Maps) o mediante la dirección y referencias para llegar. Facilita que los pacientes encuentren el lugar de atención.

[Ubicacion](./public/img/samples/ubicacion.jpg) 

---

 8. Footer / Pie de página
Pie de página con el logo, enlaces rápidos a las secciones principales, datos de contacto, links a redes sociales y el aviso de derechos reservados.

---

## 🛠️ Tecnologías utilizadas

| Tecnología | Rol |
|---|---|
| [Astro](https://astro.build/) | Framework principal del sitio (generación estática) |
| [Tailwind CSS](https://tailwindcss.com/) | Estilos y sistema de diseño responsivo |
| [Alpine.js](https://alpinejs.dev/) | Interactividad ligera (menú móvil, carruseles, etc.) |
| HTML5 / CSS3 | Estructura y estilos base |
| JavaScript | Comportamientos adicionales del cliente |
| Docker | Entorno de desarrollo containerizado (`Dockerfile` incluido) |

---

## 📁 Estructura del proyecto

```
CeRES/
└── dokto-main/
    ├── public/             # Archivos estáticos (imágenes, favicons)
    ├── src/
    │   ├── components/     # Componentes reutilizables (.astro)
    │   ├── layouts/        # Layout principal de la página
    │   └── pages/          # Página principal (index.astro)
    ├── astro.config.mjs    # Configuración de Astro
    ├── tailwind.config.cjs # Configuración de Tailwind CSS
    ├── Dockerfile          # Configuración Docker
    └── package.json        # Dependencias del proyecto
```

---

## 🚀 Instalación y desarrollo local

### Prerrequisitos

- [Node.js](https://nodejs.org/) v18 o superior
- [npm](https://www.npmjs.com/) o [pnpm](https://pnpm.io/)

### Pasos

```bash
# 1. Clonar el repositorio
git clone https://github.com/Hualpa7/CeRES.git
cd CeRES/dokto-main

# 2. Instalar dependencias
npm install

# 3. Iniciar el servidor de desarrollo
npm run dev
```

El sitio estará disponible en `http://localhost:4321`.

### Comandos disponibles

| Comando | Descripción |
|---|---|
| `npm run dev` | Inicia el servidor de desarrollo |
| `npm run build` | Genera el sitio estático en `./dist` |
| `npm run preview` | Previsualiza el build de producción |

### Con Docker

```bash
cd CeRES/dokto-main
docker build -t ceres-landing .
docker run -p 4321:4321 ceres-landing
```

---

## ✏️ Personalización

El sitio está diseñado para ser fácilmente adaptable:

- **Colores y branding**: editá las clases de Tailwind o el archivo `tailwind.config.cjs` para cambiar la paleta de colores del consultorio.
- **Contenido**: cada sección vive en un componente `.astro` independiente dentro de `src/components/`. Editá el texto, imágenes y datos directamente en el markup.
- **Imágenes**: reemplazá los archivos en la carpeta `public/` por las imágenes propias del consultorio.

---

## 📄 Licencia

Este proyecto está basado en el template open-source **Dokto** de [cssninja.io](https://cssninja.io). El contenido y la adaptación para CeRES son de autoría propia.

---

<p align="center">Desarrollado como ejemplo para el consultorio CeRES</p>
