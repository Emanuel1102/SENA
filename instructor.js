// abrir ventana de historial
const ventana = document.querySelector('#ventana');
const btnVentana = document.querySelector("#btn-ventana");
const btncerrar = document.querySelector("#btn-cerrar") 
btnVentana.addEventListener("click", ()=>{
    ventana.showModal();

    btncerrar.addEventListener("click", ()=>{
        ventana.close()
    })
});

