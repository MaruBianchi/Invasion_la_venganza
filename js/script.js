const contenido = document.getElementById("contenedor")

function obtenerLista () {
fetch ("https://crudcrud.com/api/adc54d7744e946cd8ffc1851accabb6d/grupo255")
.then(response => response.json())
.then(data => actualizar(data));
}

function actualizar () {
    contenido.innerHTML= (data)
}

setInterval (obtenerLista, 1500)
