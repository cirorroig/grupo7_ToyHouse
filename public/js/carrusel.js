
const grande = document.querySelector(".grande")
const puntos = document.querySelectorAll(".punto")


puntos.forEach((punto,i)=>{
    puntos[i].addEventListener("click",()=>{
        let posicion=i
        let operacion= posicion*-33.3

        grande.style.transform=`translate(${operacion}%)`
        
        puntos.forEach((punto,i)=>{
            puntos[i].classList.remove("punto-activo")
        })
        puntos[i].classList.add("punto-activo")
    })
})