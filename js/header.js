/* defino variables */

let header = document.getElementById('headerSticky')
let links = document.querySelectorAll('.nav-scroll--link')
let logo = document.querySelector('.scroll-bar--logo')
const altura = header.offsetTop // altura desde el top 0 hasta donde comienza el menu

/* evento del scroll */

window.addEventListener('scroll', () => {
    if (window.pageYOffset > altura) {
        header.classList.add('fixed')
        logo.classList.add('fixed-logo')
        for (i = 0; i < links.length; i++) {
            links[i].classList.add('fixed-link')
    }
    
    } else {
        header.classList.remove('fixed')
        logo.classList.remove('fixed-logo')
        
        for (i = 0; i < links.length; i++) {
            links[i].classList.remove('fixed-link')
        }
    }
})



