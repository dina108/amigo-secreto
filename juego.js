// Seleccionamos el input y la lista de amigos
const inputAmigo = document.getElementById('amigo');
const listaAmigos = document.getElementById('listaAmigos');
let amigos = []; // Lista para almacenar los nombres

// Función para agregar un amigo a la lista
function agregarAmigo() {
    let nombre = inputAmigo.value.trim(); // Obtener el valor del input y eliminar espacios

    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }

    amigos.push(nombre); // Agregar nombre al array
    mostrarLista(); // Actualizar la lista en pantalla
    inputAmigo.value = ""; // Limpiar el input
}

// Evento para agregar con la tecla "Enter"
inputAmigo.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        agregarAmigo();
    }
});

// Función para mostrar la lista de amigos en la pantalla
function mostrarLista() {
    listaAmigos.innerHTML = ""; // Limpiar lista antes de actualizar

    amigos.forEach(function(nombre) {
        let li = document.createElement("li"); // Crear un elemento <li>
        li.textContent = nombre; // Asignar el nombre
        listaAmigos.appendChild(li); // Agregar a la lista
    });
}

// Función para sortear un amigo al azar
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Agrega nombres antes de sortear.");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSecreto = amigos[indiceAleatorio];

    alert("El amigo secreto es: " + amigoSecreto);
}
