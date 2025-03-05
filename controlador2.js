
let inputNombreUsuario= document.getElementById("nombreusuario")
let inputCedulaUsuario=document.getElementById("cedula")
let inputCorreoUsuario=document.getElementById("correo")
let inputAsistenciaUsuario=document.getElementById("asistencia")
let botonFormulario=document.getElementById("boton")

                                                            
//dectectando de clic eventos en pantalla
botonFormulario.addEventListener("click",function(evento){

    //1se inicia desactivando el comportamiento por defecto
    evento.preventDefault()
    //2probamos que el evento se esta escuchando con exito
    Swal.fire({
        title: "Good job!",
        text: "You clicked the button!",
        icon: "success"
      });

})