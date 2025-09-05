document.addEventListener("DOMContentLoaded", () => {
    const soyDiv = document.getElementById("soyDiv");

    soyDiv.addEventListener("click", (event) => {
        if (event.target.id !== "boton") {
            alert("Hola! Soy el Div");
        }
    });
});

const boton = document.getElementById("boton");
boton.addEventListener("click", (event) => {
    alert("Hola!");
    event.stopPropagation();
});