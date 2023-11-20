// abrir y cerrar ventana de historial
const ventana = document.querySelector('#ventana');
const btnVentana = document.querySelectorAll(".btn-ventana");
const btncerrar = document.querySelectorAll(".btn-cerrar") 



btnVentana.forEach((btn)=>{
    btn.addEventListener("click", ()=>{
        ventana.showModal();
    
    });
    
    btncerrar.forEach((btn)=>{
        btn.addEventListener("click", ()=>{
            ventana.close()
        })
        
    })
})


let dias = document.querySelectorAll(".day")

let principal = document.querySelector(".principal")

let historial = document.querySelector(".historial")

dias.forEach((dia)=>{
    dia.addEventListener("click", ()=>{
        principal.style.display="none" 
        historial.style.display="flex" 
        
        setTimeout(()=>{ 
            historial.style.opacity=1

        }, 50)
        ventana.close()
    })  
})

let btnDiaActual = document.querySelector(".btn-dia-actual")
btnDiaActual.addEventListener("click", ()=>{ 
    historial.style.display="none" 
    principal.style.display="flex" 
    setTimeout(()=>{ 
        principal.style.opacity=1

    }, 50)
})

