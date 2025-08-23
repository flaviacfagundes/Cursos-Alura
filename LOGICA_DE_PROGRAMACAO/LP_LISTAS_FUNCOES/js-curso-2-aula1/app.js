// let titulo = document.querySelector('h1');
// // let é só para criar a variável
// titulo.innerHTML = 'Jogo do número secreto';

// let paragrafo = document.querySelector('p');
// paragrafo.innerHTML = 'Escolha um número de 1 a 10';


// Vamos evitar essa repetição de código
function alterarTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function exibirMensagemInicial(){
    alterarTextoNaTela('h1', 'Jogo do número secreto');
    alterarTextoNaTela('p', 'Escolha um número de 1 a 10');
}

exibirMensagemInicial();

function gerarNumeroAleatorio(){
    return parseInt(Math.random() * 10 + 1);
}

let numeroSecreto = gerarNumeroAleatorio();
let numeroDeTentativas = 1;

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function verificarChute(){
    let chute = document.querySelector('input').value;
    if (chute == numeroSecreto){
        alterarTextoNaTela('h1', 'Parabéns, você acertou!');
        let palavraTentativa = numeroDeTentativas == 1 ? 'tentativa' : 'tentativas';
        let mensagemTentativas = `Com ${numeroDeTentativas} ${palavraTentativa}.`;
        alterarTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto){
            alterarTextoNaTela('p', 'O número secreto é menor!');
        } else {
            alterarTextoNaTela('p', 'O número secreto é maior!');
        }
        numeroDeTentativas++;
        limparCampo();
    }
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    numeroDeTentativas = 1;
    limparCampo();
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled',true);
}