const r = document.getElementById("r");
const g = document.getElementById("g");
const b = document.getElementById("b");

const valorR = document.getElementById("valorR");
const valorG = document.getElementById("valorG");
const valorB = document.getElementById("valorB");

const cor = document.getElementById("cor");
const codigo = document.getElementById("codigo");

function atualizarCor() {

    let vermelho = r.value;
    let verde = g.value;
    let azul = b.value;

    valorR.textContent = vermelho;
    valorG.textContent = verde;
    valorB.textContent = azul;

    let rgb = `rgb(${vermelho}, ${verde}, ${azul})`;

    cor.style.backgroundColor = rgb;
    codigo.textContent = rgb;
}

r.addEventListener("input", atualizarCor);
g.addEventListener("input", atualizarCor);
b.addEventListener("input", atualizarCor);

atualizarCor();