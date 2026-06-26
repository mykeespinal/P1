S
// ===================== PARTE A — Validación del formulario =====================
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('form-contacto');
  const respuesta = document.getElementById('msg-respuesta');
  const btnVerMensajes = document.getElementById('btn-ver-mensajes');
 
  form.addEventListener('submit', (e) => {
    e.preventDefault(); // evita que recargue la página
 
    const nombre = document.getElementById('nombre').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensaje = document.getElementById('mensaje').value.trim();
 
    // Validación básica: campos vacíos
    if (!nombre || !email || !mensaje) {
      mostrarMensaje('Por favor completa todos los campos.', 'error');
      return;
    }
 
    // Validación de formato de email
    if (!validarEmail(email)) {
      mostrarMensaje('Escribe un correo electrónico válido.', 'error');
      return;
    }
 
    guardarEnStorage({ nombre, email, mensaje });
    mostrarMensaje('¡Mensaje enviado correctamente! ✅', 'exito');
    form.reset();
  });
 
  // BONUS: botón para ver mensajes guardados en un div dinámico
  if (btnVerMensajes) {
    btnVerMensajes.addEventListener('click', () => {
      mostrarMensajesEnPantalla();
    });
  }
});
 
// ===================== PARTE B — Funciones auxiliares de validación =====================
function validarEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}
 
function mostrarMensaje(texto, tipo) {
  const el = document.getElementById('msg-respuesta');
  el.textContent = texto;
  el.className = tipo === 'error' ? 'msg-error' : 'msg-exito';
}
 
// ===================== PARTE C — Guardar y mostrar mensajes con localStorage =====================
function guardarEnStorage(datos) {
  // Recupera los mensajes existentes o inicia un array vacío
  const mensajes = JSON.parse(localStorage.getItem('mensajes-contacto')) || [];
  datos.fecha = new Date().toLocaleString('es-MX');
  mensajes.push(datos);
  localStorage.setItem('mensajes-contacto', JSON.stringify(mensajes));
}
 
// Función para mostrar los mensajes guardados en consola
function verMensajesGuardados() {
  const mensajes = JSON.parse(localStorage.getItem('mensajes-contacto')) || [];
  console.table(mensajes);
}
 
// BONUS: muestra los mensajes guardados en un <div> dinámico dentro de la página
function mostrarMensajesEnPantalla() {
  const contenedor = document.getElementById('lista-mensajes');
  const mensajes = JSON.parse(localStorage.getItem('mensajes-contacto')) || [];
 
  // También los manda a consola como pide la práctica
  verMensajesGuardados();
 
  if (mensajes.length === 0) {
    contenedor.innerHTML = '<p>No hay mensajes guardados todavía.</p>';
    return;
  }
 
  let filas = mensajes.map((m) => `
    <tr>
      <td>${escaparHTML(m.nombre)}</td>
      <td>${escaparHTML(m.email)}</td>
      <td>${escaparHTML(m.mensaje)}</td>
      <td>${escaparHTML(m.fecha)}</td>
    </tr>
  `).join('');
 
  contenedor.innerHTML = `
    <table>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Email</th>
          <th>Mensaje</th>
          <th>Fecha</th>
        </tr>
      </thead>
      <tbody>
        ${filas}
      </tbody>
    </table>
  `;
}
 
// Evita inyección de HTML al mostrar datos guardados por el usuario
function escaparHTML(texto) {
  const div = document.createElement('div');
  div.textContent = texto;
  return div.innerHTML;
}
 