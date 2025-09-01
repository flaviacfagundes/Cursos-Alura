let qtdPista = 100;
let qtdSuperior = 200;
let qtdInferior = 400;

function comprar() {
    let tipoIngresso = document.getElementById('tipo-ingresso').value;
    let quantidade = parseInt(document.getElementById('qtd').value);
    let pista = document.getElementById('qtd-pista');
    let superior = document.getElementById('qtd-superior');
    let inferior = document.getElementById('qtd-inferior');

    if (!quantidade || quantidade <= 0) {
        alert('Necessário inserir uma quantidade válida de ingressos!');
        return;
    }

    if (tipoIngresso == 'pista') {
        if (qtdPista < quantidade) {
            alert('Quantidade indisponível para a venda na Pista');
            return;
        } else {
            qtdPista = qtdPista - quantidade;
            pista.innerHTML = qtdPista;
        }
    } else if (tipoIngresso == 'superior') {
        if (qtdSuperior < quantidade) {
            alert('Quantidade indisponível para a Cadeira Superior!');
            return;  
        } else {
            qtdSuperior = qtdSuperior - quantidade;
            superior.innerHTML = qtdSuperior;
        }
    } else if(tipoIngresso == 'inferior') {
        if (qtdInferior < quantidade) {
            alert('Quantidade indisponível para a Cadeira Inferior!');
            return;           
        } else {
            qtdInferior = qtdInferior - quantidade;
            inferior.innerHTML = qtdInferior;
        }
    } else {
        alert('Deu ruim!');
    }

    document.getElementById('qtd').value = '';
}
