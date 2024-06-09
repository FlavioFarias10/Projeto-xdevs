const btnavancar = document.getElementById("btn-avancar")
const btnvoltar = document.getElementById("btn-voltar")
let cartaoatual = 0;
const cartoes = document.querySelectorAll(".cartao");


btnavancar.addEventListener("click", function (){

    if(cartaoatual === cartoes.length - 1) return;
    
    const cartaoselecionado = document.querySelector(".selecionado");
    cartaoselecionado.classList.remove("selecionado");

    
    cartaoatual++;
    cartoes[cartaoatual].classList.add("selecionado");


})

btnvoltar.addEventListener("click", function (){
    
    if(cartaoatual === 0) return;
    
    const cartaoselecionado = document.querySelector(".selecionado");
    cartaoselecionado.classList.remove("selecionado");

    
    cartaoatual--;
    cartoes[cartaoatual].classList.add("selecionado");


})