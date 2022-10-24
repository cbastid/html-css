let canasta = document.querySelector("#carro");

function fcanasta() {
    alert("Tu canasta esta vacia");
}

canasta.addEventListener('click', fcanasta, false);

let btnAceptar = document.querySelector(".aceptar");

function faceptar() {
    let mifooter = document.querySelector("footer");
    mifooter.remove();
}

btnAceptar.addEventListener('click', faceptar, false);
