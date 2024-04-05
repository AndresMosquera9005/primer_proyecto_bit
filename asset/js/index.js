document.addEventListener("DOMContentLoaded", function(event) {
    let botonLogin = document.getElementById("botonLogin");
    if (botonLogin) {
        botonLogin.addEventListener("click", () => {
        alert("Espere un momento por favor ...");
    });
    } 

    let botonEnviar = document.getElementById("btn-enviar");
    if (botonEnviar) {
        botonEnviar.addEventListener("click", () => {
        alert("El formulario fue enviado exitosamente");
    });
    }

});


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

