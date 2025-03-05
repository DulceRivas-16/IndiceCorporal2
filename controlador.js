//alert("ESTOY VINCULADl

let inputPesoUsuario= document.getElementById("pesousuario")
let inputAlturaUsuario=document.getElementById("alturausuario")
let botonFormulario=document.getElementById("boton")

                                                            
//dectectando de clic eventos en pantalla
botonFormulario.addEventListener("click",function(evento){

        //1se inicia desactivando el comportamiento por defecto
       evento.preventDefault()

       //2probamos que el evento se esta escuchando con exito

        //3creamos variables para almacenar los datos del usuario
        //datos del usuario 


   
   
         let estaturaUsuario=inputAlturaUsuario.value
         let pesousuario=inputPesoUsuario.value

         //4se crea una variable para el resultado 
         let resultado=document.getElementById("resultado")


         //5 se modifica el resultado con los value

         //6 se calcula lo pedido 
         
         let calculoIMC=pesousuario/(estaturaUsuario*estaturaUsuario)
         resultado.textContent=(calculoIMC)
            //6A se crea variable para almacenar la imagen 
            let imagen=document.getElementById("foto")
         //7 se debe decidir sobre el resultado 
         if(calculoIMC<18.5){
            resultado.textContent="Bajo peso"
            imagen.src="./img/Bajo Peso.png"
         }
         else if(calculoIMC>=18.5 && calculoIMC<24.9){
           resultado.textContent="Saludable"
         }
         else if(calculoIMC>=24.9 && calculoIMC<29.9){
             resultado.textContent="Sobrepeso"
         }
         else if(calculoIMC>=29.9 && calculoIMC<34.9){
            resultado.textContent="Obesidad"
         }
         else{
            resultado.textContent="Extrema"
      }


        


   /* Swal.fire({
        title: "Good job!",
        text: "You clicked the button!",
        icon: "success"
      });*/


})