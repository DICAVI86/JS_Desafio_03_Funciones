
const square = document.querySelectorAll(".cuadrado");

square.forEach(cuadrado => {
    cuadrado.addEventListener('click', () => {
        cuadrado.classList.add("black");
    });
});
