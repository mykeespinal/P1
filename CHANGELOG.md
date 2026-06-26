
Changelog

Todos los cambios notables de este proyecto se documentan en este archivo.

El formato está basado en Keep a Changelog y este proyecto sigue un esquema de versionado simple por entregas académicas.

[2.0.0] - Práctica de Cierre — [FECHA]

Added


Sección #portafolio con HTML semántico, incluyendo 3 tarjetas de proyecto (<article class="proyecto-card">) con <figure>, <figcaption> y atributos alt descriptivos.
Sección #contacto con formulario accesible (<label> asociados a cada <input>/<textarea> mediante for/id).
Variables CSS globales en :root (--color-primario, --color-acento, --color-fondo, --color-texto, --fuente-base, --radio-borde, --sombra).
Media queries responsivas para tablet (≤768px) y móvil (≤480px).
Transiciones y efectos hover en tarjetas de proyecto, botones y campos del formulario.
Validación del formulario de contacto con JavaScript: campos vacíos y formato de correo electrónico (regex).
Almacenamiento de mensajes enviados en localStorage bajo la clave mensajes-contacto.
Botón "Ver mensajes enviados" que muestra los mensajes guardados en una tabla dinámica además de en consola (console.table()).
README.md con instrucciones de clonado por SSH, estructura del proyecto y flujo de trabajo Git.


Changed


Texto del <footer> actualizado (cambio que generó el conflicto de merge simulado entre la rama feature/js-* y main).


Fixed


Resuelto conflicto de merge en index.html entre la rama de JS y main (commit: fix: resuelve conflicto en footer entre rama JS y main).
Corregidos atributos de accesibilidad (alt) en imágenes de la sección de portafolio.



[1.0.0] - Versión anterior

Added


Estructura HTML base del portal del equipo.
Estilos CSS iniciales con tarjetas de integrantes.
Página publicada en GitHub Pages.