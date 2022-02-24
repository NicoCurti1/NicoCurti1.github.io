/* Defino variables */

const slider = document.querySelector("#slider")

let sliderModulo = document.querySelectorAll(".slider__modulo")

let sliderModuloLast = sliderModulo[sliderModulo.length -1]

const btnRight = document.querySelector("#slider__btn-rigth")
const btnLeft = document.querySelector("#slider__btn-left")

/* Coloco la ultima imagen en primer lugar y luego con css pongo el enofque en la segunda (que seria la primera en el html) */

slider.insertAdjacentElement('afterbegin', sliderModuloLast)

/* Funciones para el movimiento */

Next = () => {
    let sliderModuloFirst = document.querySelectorAll(".slider__modulo")[0];
    slider.style.marginLeft = "-200%";
    slider.style.transition = "all 0.5s";
    setTimeout(() => {
        slider.style.transition = "none";
        slider.insertAdjacentElement('beforeend', sliderModuloFirst);
        slider.style.marginLeft = "-100%";
    }, 500)
}

Prev = () => {
    let sliderModulo = document.querySelectorAll(".slider__modulo")
    let sliderModuloLast = sliderModulo[sliderModulo.length -1]
    slider.style.marginLeft = "0";
    slider.style.transition = "all 0.5s";
    setTimeout(() => {
        slider.style.transition = "none";
        slider.insertAdjacentElement('afterbegin', sliderModuloLast)
        slider.style.marginLeft = "-100%";
    }, 500)
}


/* Evento click para las flechas */

btnRight.addEventListener('click', Next)
btnLeft.addEventListener('click', Prev)


/* Para que corra automatico el slider */

setInterval(() => {
    Next()
}, 4000)