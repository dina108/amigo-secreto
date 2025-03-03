// Seleccion de los elementos del HTML
const inputAmigo = document.getElementById('amigo');
const listaAmigos = document.getElementById('listaAmigos');
const listaResultados = document.getElementById('resultado'); // Para mostrar el amigo secreto
const botonAgregar = document.getElementById('botonAgregar');
let amigos = []; // Lista de nombres

// Agregar el amigo al presionar "Enter"
inputAmigo.addEventListener("keydown", (event) => {
    if (event.key === "Enter") agregarAmigo();
});

// Agregar amigo al hacer clic en el botón
botonAgregar.addEventListener("click", agregarAmigo);

// Función para agregar amigo a la lista
function agregarAmigo() {
    let nombre = inputAmigo.value.trim(); // Elimina espacios extra

    if (!nombre) {
        alert("Ingresa un nombre válido.");
        return;
    }

    amigos.push(nombre); // Agrega el nombre
    actualizarLista(); // Muestra la lista
    inputAmigo.value = ""; // Limpia el input
}

// Función para mostrar la lista de amigos
function actualizarLista() {
    listaAmigos.innerHTML = amigos.map(nombre => `<li>${nombre}</li>`).join("");
}

// Función para sortear un amigo al azar y mostrar el resultado en pantalla
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Agrega nombres antes de sortear.");
        return;
    }

    let amigoSecreto = amigos[Math.floor(Math.random() * amigos.length)];

    // Crear un nuevo elemento de lista para mostrar el amigo secreto
    let li = document.createElement("li");
    li.textContent = `🎁 Amigo Secreto: ${amigoSecreto}`;
    listaResultados.innerHTML = ""; // Limpiar resultados anteriores
    listaResultados.appendChild(li); // Mostrar el amigo secreto en pantalla

}
