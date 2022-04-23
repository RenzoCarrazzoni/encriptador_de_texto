var sinTexto = document.querySelector("#sintexto");
var sinTextoImg = document.querySelector("#sintextoimg");

var botonCopiar = document.querySelector("#btn-copy");
botonCopiar.classList.add("invisible");

function invocarFade(input){
    if(input > 0){
        fadeOut(sinTexto);
        fadeOut(sinTextoImg);
        fadeIn(botonCopiar);
        if(window.innerWidth<480){
            mostrarRecursivo();
        }
        botonCopiar.classList.remove("invisible");
    }
    else{
        fadeIn(sinTexto);
        fadeIn(sinTextoImg);
        fadeOut(botonCopiar);

        if(window.innerWidth<480){
            regresarRecursivo();
        }

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

function mostrarRecursivo(){
    document.querySelector(".rectangle").style.height = "595px";

    document.querySelector(".textoModificado").style.height = "432px"
    document.querySelector(".textoModificado").style.margin = "32px 0 32px -132.5px"

    document.querySelector(".frame2").style.height = "67px";
    document.querySelector(".frame2").style.width = "279px";
    document.querySelector(".frame2").style.margin = "342px auto 0 auto";
    return;
}

function regresarRecursivo(){
    document.querySelector(".rectangle").style.height = "186px";

    document.querySelector(".textoModificado").style.height = "186px"
    document.querySelector(".textoModificado").style.margin = "0px 0 0px -132.5px"

    document.querySelector(".frame2").style.height = "0px";
    document.querySelector(".frame2").style.width = "0px";
    document.querySelector(".frame2").style.margin = "0px";
}