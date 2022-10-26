let filme1= 'imagens/filme01.jpg'
let filme2= 'imagens/filme02.jpg'
let filme3= 'imagens/filme03.jpg'
let filme4= 'imagens/filme04.jpg'
let filme5= 'imagens/filme05.jpg'
let filme6= 'imagens/filme06.png'

document.querySelector(".container").innerHTML += "<img src='" +filme1 + "'> "
document.querySelector(".container").innerHTML += "<img src='" +filme2 + "'> "
document.querySelector(".container").innerHTML += "<img src='" +filme3 + "'> "
document.querySelector(".container").innerHTML += "<img src='" +filme4 + "'> " 
document.querySelector(".container").innerHTML += "<img src='" +filme5 + "'> "
document.querySelector(".container").innerHTML += "<img src='" +filme6 + "'> "

var filmes = ['imagens/filme01.jpg','imagens/filme02.jpg','imagens/filme03.jpg','imagens/filme04.jpg','imagens/filme05.jpg','imagens/filme06.jpg']
document.querySelector(".container").innerHTML += "<img src='" +filme[1] + "'> "
document.querySelector(".container").innerHTML += "<img src='" +filme[2] + "'> "
document.querySelector(".container").innerHTML += "<img src='" +filme[3] + "'> "
document.querySelector(".container").innerHTML += "<img src='" +filme[4] + "'> " 
document.querySelector(".container").innerHTML += "<img src='" +filme[5] + "'> "
document.querySelector(".container").innerHTML += "<img src='" +filme[6] + "'> "
