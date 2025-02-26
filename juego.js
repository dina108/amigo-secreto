// Crear un array vacío para almacenar los nombres de los amigos
let amigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    // Obtener el valor del campo de texto
    const inputAmigo = document.getElementById('amigo');
    const nombre = inputAmigo.value.trim(); // Eliminar espacios innecesarios

    // Verificar si el campo está vacío
    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }

    // Agregar el nombre a la lista de amigos
    amigos.push(nombre);
 A
    // Mostrar el nombre en la lista visible en la página
    mostrarListaAmigos();
A
    // Limpiar el campo de entrada
    inputAmigo.value = "";
}

// Función para mostrar la lista de amigos en el HTML
function mostrarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ''; // Limpiar la lista cada vez que se actualice

    // Agregar cada amigo a la lista
    amigos.forEach((amigo, index) => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

// Función para realizar el sorteo aleatorio
function sortearAmigo() {
    // Verificar si hay amigos en la lista
    if (amigos.length === 0) {
        alert("Por favor, ingresa al menos un nombre.");
        return;
    }

    // Seleccionar un amigo aleatorio
    const amigoSecreto = amigos[Math.floor(Math.random() * amigos.length)];

    // Mostrar el resultado en la lista de resultados
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>Tu amigo secreto es: <strong>${amigoSecreto}</strong></li>`;
}
