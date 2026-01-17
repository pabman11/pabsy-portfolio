# Pabsy Portfolio

Portfolio profesional minimalista de Pablo Fornali, desarrollador frontend.

## 🚀 Características

- ✨ Diseño minimalista con acentos naranjas
- 📱 Totalmente responsive
- 📝 Blog integrado con MDX
- 🎨 Tailwind CSS para estilos
- ⚡ Construido con Astro para máximo rendimiento
- 🖼️ Optimización automática de imágenes
- 🔍 SEO optimizado con meta tags
- 📡 RSS feed incluido

## 🛠️ Stack Tecnológico

- [Astro](https://astro.build) - Framework web
- [Tailwind CSS](https://tailwindcss.com) - Estilos
- [MDX](https://mdxjs.com) - Contenido del blog
- [TypeScript](https://www.typescriptlang.org) - Tipado estático

## 📦 Instalación

```bash
# Clonar el repositorio
git clone https://github.com/pabman11/pabsy-portfolio.git
cd pabsy-portfolio

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

## 🧞 Comandos

| Comando                   | Acción                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Instala las dependencias                         |
| `npm run dev`             | Inicia servidor local en `localhost:4321`        |
| `npm run build`           | Construye el sitio para producción en `./dist/`  |
| `npm run preview`         | Previsualiza la build localmente antes de deploy |

## 📁 Estructura del Proyecto

```
/
├── public/              # Archivos estáticos
├── src/
│   ├── assets/         # Imágenes y recursos
│   ├── components/     # Componentes Astro
│   ├── content/        # Contenido del blog (MDX)
│   │   └── blog/       # Posts del blog
│   ├── layouts/        # Layouts de página
│   ├── pages/          # Rutas de la aplicación
│   └── styles/         # Estilos globales
└── package.json
```

## 📝 Añadir un Nuevo Post

Crea un nuevo archivo `.mdx` en `src/content/blog/` con el siguiente formato:

```mdx
---
title: "Título del post"
draft: false
pubDate: "2026-01-17"
description: "Descripción breve"
cover: ./imagen.jpg
coverAlt: "Descripción de la imagen"
tags: ["tag1", "tag2"]
---

Tu contenido aquí...
```

## 🎨 Personalización

### Colores

Los colores principales se definen en `src/styles/global.css`:

- `--color-primary`: #FF6B35 (Naranja)
- `--color-primary-dark`: #E55A2B (Naranja oscuro)

### Fuentes

Se utiliza la fuente Inter, importada desde `@fontsource/inter`.

## 📄 Licencia

© 2026 Pablo Fornali Manzanas. Todos los derechos reservados.

## 👤 Autor

**Pablo Fornali**
- Instagram: [@pabman11](https://instagram.com/pabman11)
- GitHub: [@pabman11](https://github.com/pabman11)
- Email: hola@pabsy.dev
