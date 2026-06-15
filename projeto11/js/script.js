const palavras = [
    "BOLA",
    "GOL",
    "COPA",
    "BRASIL",
    "FUTEBOL",
    "CAMPEAO",
    "TORCIDA",
    "ESTADIO"
];

let usadas = [];

function irParaJogo() {
    window.location.href = "jogo.html";
}

function sair() {
    window.location.href = "index.html";
}

function jogarNovamente() {
    window.location.href = "index.html";
}

function sortearPalavra() {

    if(usadas.length >= palavras.length){
        window.location.href = "vencedor.html";
        return;
    }

    let indice;

    do{
        indice = Math.floor(Math.random() * palavras.length);
    }while(usadas.includes(indice));

    usadas.push(indice);

    document.getElementById("palavra").innerText =
        palavras[indice];

    document.getElementById("restantes").innerText =
        (palavras.length - usadas.length) +
        " restantes";
}