let btnsVentana = document.querySelectorAll(".btn-ventana")

let btnsCerrar = document.querySelectorAll(".btn-cerrar")

btnsVentana.forEach((boton)=>{
    boton.addEventListener("click", ()=>{
        boton.nextElementSibling.showModal()
        
    })

})

btnsCerrar.forEach((boton_cerrar)=>{
    boton_cerrar.addEventListener("click", ()=>{
        boton_cerrar.closest(".ventana").close()
        
    })

})