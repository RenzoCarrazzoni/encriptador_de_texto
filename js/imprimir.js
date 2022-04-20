function imprimir (texto){
    var campoMensaje = document.querySelector("#msg");
    campoMensaje.textContent = texto.charAt(0).toUpperCase() + texto.slice(1);
    return;
}
