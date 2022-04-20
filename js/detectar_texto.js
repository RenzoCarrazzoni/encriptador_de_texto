var deteccionTextoDer = document.querySelector("#msg");
var deteccionTextoIzq = document.querySelector("#input-texto");

deteccionTextoDer.addEventListener("input", function(){
    invocarFade(this.textContent.length);
});

deteccionTextoIzq.addEventListener("paste", function(evento){
    evento.preventDefault();
    eliminarFormato(evento);
});

deteccionTextoDer.addEventListener("paste", function(evento){
    evento.preventDefault();
    eliminarFormato(evento);
    invocarFade(this.textContent.length);
});

function verificarInput(input){

    for(var i = 0;i < input.textContent.length;i++){
        if((input.textContent.charCodeAt(i) < 97 && input.textContent.charCodeAt(i) != 32) || input.textContent.charCodeAt(i) > 122){
            return false;
        }
    }

    return true;
}