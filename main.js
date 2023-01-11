const menubar = document.querySelector('#menubar')
const animar = document.querySelector('ul')
const btnMenu = document.querySelector('#btnMenu')
btnMenu.addEventListener('click', evento => mostraMenuLateral())



function mostraMenuLateral(evento){
    if(menubar.style.display == 'block') {
        animar.classList.add('animacaoSaida')
        setTimeout(() => {
            menubar.style.display = 'none'
        }, 1000)
    } else {
        animar.classList.remove('animacaoSaida')
        animar.classList.add('animacao')
        menubar.style.display = 'block'
    }
}




