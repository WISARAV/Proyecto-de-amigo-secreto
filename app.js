// app.js

// Función para agregar un amigo a la lista
function agregarAmigo() {
    // Obtener el input y su valor, quitando espacios extra
    const input = document.getElementById('amigo');
    const nombreAmigo = input.value.trim();
    
    // Validar que no esté vacío
    if (nombreAmigo === "") {
        return;
    }
    
    // Crear un nuevo elemento li y asignarle el nombre del amigo
    const li = document.createElement('li');
    li.textContent = nombreAmigo;
    
    // Agregar el li a la lista de amigos
    const lista = document.getElementById('listaAmigos');
    lista.appendChild(li);
    
    // Limpiar el input para poder ingresar otro nombre
    input.value = "";
    input.focus();
}

// Función para sortear un amigo secreto (opcional)
function sortearAmigo() {
    const lista = document.getElementById('listaAmigos');
    const amigos = lista.getElementsByTagName('li');
    
    // Verificar que existan amigos en la lista
    if (amigos.length === 0) {
        alert("No hay amigos para sortear");
        return;
    }
    
    // Seleccionar aleatoriamente un amigo
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSeleccionado = amigos[indiceAleatorio].textContent;
    
    // Mostrar el resultado en la lista o contenedor de resultado
    const resultado = document.getElementById('resultado');
    resultado.textContent = `El amigo secreto es: ${amigoSeleccionado}`;
}
