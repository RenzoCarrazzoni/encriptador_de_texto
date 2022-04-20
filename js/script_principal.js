
/* Reglas de encriptación: 
"e" es convertido para "enter" 
"i" es convertido para "imes"
"a" es convertido para "ai"
"o" es convertido para "ober"
"u" es convertido para "ufat"
Solo letras minusculas
No se permite acentuación de palabras 
*/

/* Reglas de desencriptación: 
"enter" es convertido para "e" 
"imes" es convertido para "i"
"ai" es convertido para "a"
"ober" es convertido para "o"
"ufat" es convertido para "u"
Solo letras minusculas
No se permite acentuación de palabras   
*/

var reglaEncriptacion = ["a","e","i","o","u"];
var reglaDesencriptacion = ["ai","enter","imes","ober","ufat"];

var botonEncriptar = document.querySelector("#btn-encriptar");

botonEncriptar.addEventListener("click",function(event){
    event.preventDefault();

    var inputParaEncriptar = document.querySelector("#input-texto");
    
    if(verificarInput(inputParaEncriptar)){
        invocarFade(inputParaEncriptar.textContent.length);
        textoEncriptado = encriptar(inputParaEncriptar);
        imprimir(textoEncriptado);
    }
    else{
        alert("Se detectaron mayúsculas y/o caracteres inválidos")
    }
});

var botonDesencriptar = document.querySelector("#btn-desencriptar");

botonDesencriptar.addEventListener("click",function(event){
    event.preventDefault();

    var inputParaDesencriptar = document.querySelector("#input-texto");

    if(verificarInput(inputParaDesencriptar)){
        textoDesencriptado = desencriptar(inputParaDesencriptar);
        imprimir(textoDesencriptado);
        invocarFade(inputParaDesencriptar.textContent.length);
    }
    else{
        alert("Se detectaron mayúsculas y/o caracteres inválidos")
    }
});