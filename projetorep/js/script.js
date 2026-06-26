

let rangeR = document.getElementById("range-r");
let rangeG = document.getElementById("range-g");
let rangeB = document.getElementById("range-b");

let valorR = document.getElementById("valor-r");
let valorG = document.getElementById("valor-g");
let valorB = document.getElementById("valor-b");

let colR = document.getElementById("coluna-vermelho");
let colG = document.getElementById("coluna-verde");
let colB = document.getElementById("coluna-azul");

let cabecalho = document.querySelector("header");
let rodape = document.querySelector("footer");
let barraLateral = document.querySelector(".barra-lateral");



function atualizarCores(){

    let r = parseInt(rangeR.value);
    let g = parseInt(rangeG.value);
    let b = parseInt(rangeB.value);

    

    valorR.innerHTML = r;
    valorG.innerHTML = g;
    valorB.innerHTML = b;

    
    colR.style.backgroundColor = "rgb(" + r + ",0,0)";
    colG.style.backgroundColor = "rgb(0," + g + ",0)";
    colB.style.backgroundColor = "rgb(0,0," + b + ")";



    let cor = "rgb(" + r + "," + g + "," + b + ")";

    cabecalho.style.backgroundColor = cor;
    rodape.style.backgroundColor = cor;
    barraLateral.style.backgroundColor = cor;



rangeR.addEventListener("input", atualizarCores);
rangeG.addEventListener("input", atualizarCores);
rangeB.addEventListener("input", atualizarCores);

}

atualizarCores();