
function encriptar(){
    
    var mensaje = document.getElementById('mensaje').value;
    var exp = /[A-Zá-úÁ-Ú?!))$&.'!"@&]/g;
    var nuevoTexto = '';  

    validacionMensaje(mensaje); 
    
    if(exp.test(mensaje)){
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "El mensaje contiene mayúsculas, acentos o caracteres especiales"
          });
    }else{
        for (var i=0; i < mensaje.length; i++)
        {
            if(mensaje[i] == 'a'){
                nuevoTexto += 'ai'
            }
            else if(mensaje[i] == 'e'){ 
                nuevoTexto += 'enter'
            }
            else if(mensaje[i] == 'i'){
                nuevoTexto += 'imes'
            }
            else if(mensaje[i] == 'o'){
                nuevoTexto += 'ober'
            }
            else if(mensaje[i] == 'u'){
                nuevoTexto += 'ufat'
            }
            else{
                nuevoTexto += mensaje[i];
            }
        }

        document.getElementById('resultado').value = nuevoTexto;
    }
}


function desencriptar(mensaje){

    var mensaje = document.getElementById('mensaje').value;
    var exp = /[A-Zá-úÁ-Ú?!))$&.'!"@&%]/g; 
    
    validacionMensaje(mensaje);

    if(exp.test(mensaje)){
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "El mensaje contiene mayúsculas, acentos o caracteres especiales"
          });
    }else{
        if(mensaje.includes('ai')){
            mensaje = mensaje.replace(/ai/g,'a'); 
         }
         if(mensaje.includes('enter')){
            mensaje = mensaje.replace(/enter/g,'e'); 
         }
         if(mensaje.includes('imes')){
            mensaje = mensaje.replace(/imes/g,'i'); 
         }
         if(mensaje.includes('ober')){
            mensaje = mensaje.replace(/ober/g,'o'); 
         }
         if(mensaje.includes('ufat')){
            mensaje = mensaje.replace(/ufat/g,'u'); 
         }

        document.getElementById('resultado').value = mensaje;
    }
}

function validacionMensaje(mensaje) {
    if(mensaje === "" || mensaje.length === 0 ){
        Swal.fire({
            icon: "warning",
            title: "Atención",
            text: "El campo se encuentra vacío..."
          });
    } 
}

function copiarTexto() {

    // Obtener el texto del textarea
    var texto = document.getElementById('resultado').value;
    
    if(texto === "" || texto.length === 0 ){
        Swal.fire({
            icon: "warning",
            title: "Atención",
            text: "El campo se encuentra vacío..."
          });
    }else{
        // Crear un elemento de texto temporal
        var elementoTemporal = document.createElement('textarea');
        elementoTemporal.value = texto;
        document.body.appendChild(elementoTemporal);
        
        // Seleccionar y copiar el texto del elemento temporal
        elementoTemporal.select();
        document.execCommand('copy');
        
        // Eliminar el elemento temporal
        document.body.removeChild(elementoTemporal);
        
        document.getElementById('mensaje').value = '';
        document.getElementById('resultado').value = '';

        // Mostrar un mensaje de éxito
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Copiado con éxito...",
            showConfirmButton: false,
            timer: 1500
        });
    }
    
}