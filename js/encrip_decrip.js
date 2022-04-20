function encriptar(input){

    var textoIngresado = input.textContent;
    var vectorTexto = textoIngresado.split('');

    for(var i = 0; i < vectorTexto.length; i++){
        for(var j = 0;j < reglaEncriptacion.length;j++){

            if(vectorTexto[i] == reglaEncriptacion[j]){
                vectorTexto[i] = reglaDesencriptacion[j];
            }
        }
    }
    return vectorTexto.join('');
}

function desencriptar(input){

    var textoIngresado = input.textContent;

    for(var j = 0;j < reglaDesencriptacion.length;j++){

        var regla = new RegExp(reglaDesencriptacion[j],'g');
        textoIngresado = textoIngresado.replace(regla,reglaEncriptacion[j]);
    }

   return textoIngresado;
}