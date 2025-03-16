function agregarAmigo() {
    const input = document.getElementById('amigo');
    const nombreAmigo = input.value.trim();
    
    // Validar que el campo no esté vacío ni contenga números
    if (nombreAmigo === "" || /\d/.test(nombreAmigo)) {
        alert("Ingrese un nombre válido sin números");
        input.value = "";
        input.focus();
        return;
    }
    
    // Transformar: primera letra en mayúscula y el resto en minúsculas
    const nombreFormateado = nombreAmigo.charAt(0).toUpperCase() + nombreAmigo.slice(1).toLowerCase();
    
    // Verificar si el nombre ya existe en la lista
    const lista = document.getElementById('listaAmigos');
    const amigos = lista.getElementsByTagName('li');
    for (let amigo of amigos) {
        if (amigo.textContent === nombreFormateado) {
            alert("El nombre ya está en la lista");
            input.value = "";
            input.focus();
            return;
        }
    }
    
    // Crear el elemento li y agregar el nombre formateado
    const li = document.createElement('li');
    li.textContent = nombreFormateado;
    lista.appendChild(li);
    
    // Limpiar el input para ingresar otro nombre
    input.value = "";
    input.focus();
}

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
    
    // Limpiar la lista para iniciar con una nueva
    lista.innerHTML = "";
}

