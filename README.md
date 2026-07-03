# Invitación web — Elizbhet Vahos Correa

Invitación interactiva lista para editar en Visual Studio Code y compartir con un enlace.

## Incluye

- Foto de la cumpleañera, animaciones suaves, confeti y cuenta regresiva.
- Fecha: sábado 11 de julio de 2026, 7:30 p. m.
- Dirección y botón para abrir Google Maps.
- Botón de confirmación que abre directamente el chat de WhatsApp con un mensaje predeterminado.

## Confirmación de asistencia

El número de WhatsApp ya está configurado:

```js
const WHATSAPP_NUMBER = "573188607476";
```

Cuando un invitado toca **Confirmar asistencia**, se abre el chat de WhatsApp con este mensaje listo para enviar:

> Hola, confirmo mi asistencia a la celebración de Elizbhet Vahos Correa el sábado 11 de julio de 2026. ¡Gracias!

## Abrir en VS Code

1. Descomprime la carpeta.
2. Abre la carpeta `invitacion-elizbhet-vahos-correa-github-final` en Visual Studio Code.
3. Instala la extensión **Live Server**.
4. Haz clic derecho sobre `index.html` y usa **Open with Live Server**.

No necesita Java, Node.js ni dependencias.

## Publicarla y compartirla por WhatsApp

## Publicar en GitHub Pages

1. Crea un repositorio nuevo en GitHub.
2. Sube **todos** los archivos y la carpeta `assets` de esta carpeta, sin cambiar su estructura.
3. En GitHub, ve a **Settings → Pages**.
4. En “Build and deployment”, selecciona **Deploy from a branch**.
5. Elige la rama **main** y la carpeta **/(root)**; luego pulsa **Save**.
6. GitHub mostrará el enlace público unos minutos después.

No cambies el nombre ni la ubicación de `assets/elizbhet-vahos-correa.jpeg`, porque es la foto de la invitación.

## Estructura

```text
invitacion-elizbhet-vahos-correa-github-final/
├── index.html
├── styles.css
├── script.js
├── README.md
└── assets/
    └── elizbhet-vahos-correa.jpeg
```
