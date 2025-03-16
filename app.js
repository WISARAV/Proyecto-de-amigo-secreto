// Función para agregar un amigo a la lista
function agregarAmigo() {
    const input = document.getElementById('amigo');
    const nombreAmigo = input.value.trim();
    
    if (nombreAmigo === "") return;
    
    const li = document.createElement('li');
    li.textContent = nombreAmigo;
    
    const lista = document.getElementById('listaAmigos');
    lista.appendChild(li);
    
    // Limpiar el input para ingresar otro nombre
    input.value = "";
    input.focus();
}

// Función para sortear un amigo secreto y limpiar la lista
function sortearAmigo() {
    const lista = document.getElementById('listaAmigos');
    const amigos = lista.getElementsByTagName('li');
    
    if (amigos.length === 0) {
        alert("No hay amigos para sortear");
        return;
    }
    
    // Seleccionar aleatoriamente un amigo
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSeleccionado = amigos[indiceAleatorio].textContent;
    
    // Mostrar el resultado en el contenedor de resultado
    const resultado = document.getElementById('resultado');
    resultado.textContent = `El amigo secreto es: ${amigoSeleccionado}`;
    
    // Limpiar la lista de amigos para iniciar con una nueva
    lista.innerHTML = "";
}
