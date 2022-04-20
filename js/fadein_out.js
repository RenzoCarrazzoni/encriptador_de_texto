var sinTexto = document.querySelector("#sintexto");
var sinTextoImg = document.querySelector("#sintextoimg");

var botonCopiar = document.querySelector("#btn-copy");
botonCopiar.classList.add("invisible");

function invocarFade(input){
    if(input > 0){
        fadeOut(sinTexto);
        fadeOut(sinTextoImg);
        fadeIn(botonCopiar);
        botonCopiar.classList.remove("invisible");
    }
    else{
        fadeIn(sinTexto);
        fadeIn(sinTextoImg);
        fadeOut(botonCopiar);
        botonCopiar.classList.add("invisible");
    }

    return;

}

function fadeOut(elemento){
    elemento.classList.add("fadeOut");
    elemento.classList.remove("fadeIn");
    return;
}

function fadeIn(elemento){
    elemento.classList.remove("fadeOut");
    elemento.classList.add("fadeIn");
    return;
}