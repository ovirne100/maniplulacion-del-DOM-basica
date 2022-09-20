let carro1 = document.querySelector('.car1')
let carro2 = document.querySelector('.car2')

carro1.addEventListener('click',desaparececar2)

function desaparececar2(){
  carro2.classList.toggle('inactive')
 
}



let rayas3 = document.querySelector('.menu-hamburgueza')
let deportivos = document.querySelector('.dpt')

rayas3.addEventListener('click',cosasdeprtivas)

function cosasdeprtivas (){
  cocinaslindas.classList.add('inactive')
deportivos.classList.toggle('inactive')
}



let carrito = document.querySelector('.shoppin-cart')
let cocinaslindas = document.querySelector('.cocina')

carrito.addEventListener('click',mycocina)

function mycocina(){
  deportivos.classList.add('inactive')
  cocinaslindas.classList.toggle('inactive')
}

