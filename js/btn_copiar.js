var botonCopiar = document.querySelector("#btn-copy");

botonCopiar.addEventListener("click",function(event){
    event.preventDefault();
    var campoMensaje = document.querySelector("#msg");
    navigator.clipboard.writeText(campoMensaje.textContent);
});