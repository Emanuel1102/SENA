// abrir y cerrar ventanas
let btnsVentana = document.querySelectorAll(".btn-ventana")

let btnsCerrar = document.querySelectorAll(".btn-cerrar")
// ABRIR
btnsVentana.forEach((boton)=>{
    boton.addEventListener("click", ()=>{
        boton.nextElementSibling.showModal()
        
    })

})
// CERRAR
btnsCerrar.forEach((boton_cerrar)=>{
    boton_cerrar.addEventListener("click", ()=>{
        boton_cerrar.closest(".ventana").close()
        
    })

})


let pisos = [...document.querySelectorAll(".piso")]

pisos.forEach((pisoClick)=>{
    pisoClick.addEventListener("click", ()=>{
        pisos.forEach((piso)=>{
            if (piso !== pisoClick && piso.hasAttribute("open")) {
                piso.removeAttribute("open")
            }

        })
    })

})

