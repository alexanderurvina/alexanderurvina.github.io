# alexanderurvina.github.io

Portafolio personal de Hans Alexander Urvina Colín: proyectos, trayectoria, herramientas y contacto.

**Sitio publicado:** https://alexanderurvina.github.io

## Tecnologías

- HTML5 y CSS3
- [Bootstrap 5.3](https://getbootstrap.com/) y Bootstrap Icons, cargados por CDN
- Tipografía [Archivo](https://fonts.google.com/specimen/Archivo) de Google Fonts
- JavaScript vanilla, solo para cerrar el menú móvil al elegir una sección
- GitHub Pages para la publicación

No usa frameworks, npm ni ningún paso de compilación.

## Estructura

```
├── index.html               # única página del sitio
├── css/style.css            # estilos propios sobre Bootstrap
├── js/main.js               # cierre del menú móvil
├── assets/
│   ├── favicon.svg
│   ├── img/                 # figuras de la tesis e imagen para redes sociales
│   ├── wireframes_rutta/    # wireframes de Rutta hechos por Hans
│   ├── modelo-entidad-relacion-rutta.png
│   └── docs/                # CV en PDF
└── .nojekyll                # indica a GitHub Pages que no procese el sitio con Jekyll
```

## Verlo localmente

1. Clona el repositorio:
   ```
   git clone https://github.com/alexanderurvina/alexanderurvina.github.io.git
   ```
2. Abre `index.html` en el navegador, o usa la extensión Live Server de VS Code para que la página se recargue al guardar.

Bootstrap y las fuentes se cargan desde internet, así que necesitas conexión para verlo con su estilo completo.
