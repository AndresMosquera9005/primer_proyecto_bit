document.addEventListener("DOMContentLoaded", function(event) {
    let botonLogin = document.getElementById("botonLogin");
    if (botonLogin) {
        botonLogin.addEventListener("click", () => {
        alert("Espere un momento por favor ...");
    });
    } 

    let boton_registro = document.getElementById("boton-registro");
    if (boton_registro) {
        boton_registro.addEventListener("click", () => {
        alert("Su registro fue un exito");
    });
    } 

    let botonEnviar = document.getElementById("crear-cuenta");
    if (botonEnviar) {
        botonEnviar.addEventListener("click", () => {
        alert("Su cuenta ta fue creada con exito");
    });
    }

});

let imagenes = document.querySelectorAll(".imagen-cliente")
console.log("🚀 ~ imagenes:", imagenes)

for (let x = 0; x < imagenes.length; x++) {
    imagenes[x].addEventListener('mouseover', () => {
        imagenes[x].classList.add('animate__animated', 'animate__bounce');
    });
    imagenes[x].addEventListener('mouseout', () => {
        imagenes[x].classList.remove('animate__animated', 'animate__bounce');
    });
    
}


// let boton_login = document.getElementById("botonLogin");
//let btn_enviar = document.getElementById("btn-enviar");

// document.addEventListener("DOMContentLoaded", () => {
//     let botonLogin = document.getElementById("botonLogin");
//     if (botonLogin) {
//         botonLogin.addEventListener("click", () => {
//         alert("Espere un momento por favor ...");
//     });
//     } 
// });

// document.addEventListener("DOMContentLoaded", () => {
//     let botonEnviar = document.getElementById("btn-enviar");
//     if (botonEnviar) {
//         botonEnviar.addEventListener("click", () => {
//         alert("El formulario fue enviado exitosamente");
//     });
//     } 
// });

