// Seleccionamos el botón y el párrafo usando sus ID
const boton = document.getElementById('miBoton');
const texto = document.getElementById('texto');

// Añadimos un evento que "escuche" el clic del usuario
boton.addEventListener('click', () => {
    // Cambiamos el contenido del texto y su color
    texto.textContent = "¡Acabas de interactuar con JavaScript!";
    texto.style.color = "green";
    texto.style.fontWeight = "bold";
});
