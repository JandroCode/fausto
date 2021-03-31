let mas = document.getElementById("mas")
let menos = document.getElementById("menos")
let laboral = document.getElementById("laboral")

window.addEventListener('load', () => {
    menos.style.display = 'none'
    laboral.style.display = 'none'
})

mas.addEventListener('click', () => {
    mas.style.display='none'
    laboral.style.display = 'block'
    menos.style.display = 'inline'
})

menos.addEventListener('click', () => { 
    menos.style.display='none'
    mas.style.display='inline'
    laboral.style.display = 'none'
})

