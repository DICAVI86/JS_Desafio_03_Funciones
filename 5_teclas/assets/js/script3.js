


document.addEventListener('keydown', function (pintar) {
    if (pintar.key === 'a') {
    key.style.backgroundColor = "pink"
    } else if (pintar.key === 's') {
    key.style.backgroundColor = "orange"
    } else if (pintar.key === 'd') {
    key.style.backgroundColor = "lightblue"
    }})


document.addEventListener("keydown", function(event) {
    if (event.key === "q") {
    agregarElemento("purple");
    } else if (event.key === "w") {
    agregarElemento("gray");
    } else if (event.key === "e") {
    agregarElemento("brown");
    }});

function agregarElemento(color) {
    contenedor = document.querySelector("body");
    nuevoElemento = document.createElement("div");
    nuevoElemento.classList.add("key");
    nuevoElemento.style.backgroundColor = color;
    contenedor.appendChild(nuevoElemento);
    }

