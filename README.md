Portal del Equipo — Desarrollo Web Integral

Sitio web colaborativo desarrollado como práctica de cierre de la Unidad II: Control de Versiones, de la materia Desarrollo Web Integral (Ingeniería en Desarrollo y Gestión de Software).

El proyecto integra HTML semántico, CSS responsivo y JavaScript con manipulación del DOM, construido en equipo utilizando el flujo de trabajo GitHub Flow (ramas, Pull Requests, code review y resolución de conflictos).

📋 Descripción

El sitio presenta al equipo de trabajo, un portafolio de proyectos desarrollados durante el curso, y un formulario de contacto funcional con validación y almacenamiento local de mensajes.

👥 Integrantes y roles

IntegranteRolResponsabilidadNombre del LíderLíderCoordinación del repositorio, gestión de PRs, CHANGELOG.md, resolución de conflictosNombre integranteHTMLSección de portafolio y formulario de contacto (index.html)Nombre integranteCSSResponsividad, variables y transiciones (styles.css)Nombre integranteJSValidación de formulario y localStorage (script.js)

🗂️ Estructura del proyecto

.
├── index.html
├── styles.css
├── script.js
├── img/
│   ├── proyecto1.png
│   ├── proyecto2.png
│   └── proyecto3.png
├── docs/
│   ├── git-log.png
│   ├── pull-requests.pdf
│   └── resolucion-conflicto.png
├── CHANGELOG.md
└── README.md

🚀 Cómo clonar el repositorio (SSH)

Este repositorio utiliza autenticación SSH para el clonado. Asegúrate de tener configurada tu llave SSH en GitHub antes de clonar.


Verifica que tu llave SSH esté agregada en GitHub (Settings → SSH and GPG keys).
Prueba la conexión:


bash   ssh -T git@github.com


Clona el repositorio usando la URL SSH (no HTTPS):


bash   git clone git@github.com:usuario/nombre-del-repositorio.git


Entra a la carpeta del proyecto:


bash   cd nombre-del-repositorio

🔧 Flujo de trabajo (Git)

El equipo siguió el flujo GitHub Flow:


Cada integrante creó su rama a partir de main con la convención feature/[rol]-[apellido].
Se realizaron commits siguiendo Conventional Commits (feat:, style:, fix:, docs:).
Cada rama se subió a GitHub y se abrió un Pull Request hacia main, revisado y comentado por el Líder.
Los PRs se mergearon en orden: HTML → CSS → JS.
Se resolvió un conflicto de merge en index.html entre la rama de JS y main, documentado en docs/.


Para ver el historial completo de commits y ramas:

bashgit log --oneline --graph --all

💻 Cómo probar el sitio localmente


Abre index.html directamente en tu navegador, o usa un servidor local:


bash   python3 -m http.server 8000

y visita http://localhost:8000.


Navega a la sección Contáctanos y prueba el formulario:

Déjalo vacío → debe mostrar un mensaje de error.
Escribe un correo inválido → debe mostrar un mensaje de error de formato.
Llénalo correctamente → debe mostrar un mensaje de éxito y guardar el mensaje.



Abre las DevTools → Application → Local Storage para verificar que los mensajes se guardaron bajo la clave mensajes-contacto.
Usa el modo responsive de las DevTools (o redimensiona la ventana) para verificar los breakpoints de tablet (768px) y móvil (480px).


📄 Documentación adicional

Consulta CHANGELOG.md para ver el historial de versiones y cambios del proyecto.