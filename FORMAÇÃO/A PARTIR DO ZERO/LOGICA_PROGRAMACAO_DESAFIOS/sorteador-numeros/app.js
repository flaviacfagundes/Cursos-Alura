
function sortear() {
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);

    if (de > ate) {
        alert('Valor digitado no campo <Do campo> \nÉ superior ao campo <Até o número>\nFavor verificar e corrigir os campos.');
        return; // Para a execução da função sortear() aqui
    }

    if (quantidade > ((ate + 1) - de)) {
        alert(`O intervalo de ${de} até ${ate} não contém números sufientes para atender ao solicitado (${quantidade})\nFavor verificar e corrigir os campos.`);
        return;
    }

    let numerosSorteados = [];
    let numeroGerado;

    for (let i = 0; i < quantidade; i++) {
        numeroGerado = gerarNumeroAleatorio(de, ate);

        while(numerosSorteados.includes(numeroGerado)) {
            numeroGerado = gerarNumeroAleatorio(de, ate);
        }

        numerosSorteados.push(numeroGerado);
    }

    let retornoDosNumerosSorteados = document.getElementById('resultado');
    retornoDosNumerosSorteados.innerHTML = `<label class="texto__paragrafo">Números sorteados:  ${numerosSorteados}</label>`;
    alterarStatusBotao();
}

function gerarNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function alterarStatusBotao() {
    let botao = document.getElementById('btn-reiniciar');

    if (botao.classList.contains('container__botao-desabilitado')) {
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
    } else {
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');
    }
}

function reiniciar() {
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';
    alterarStatusBotao();
}
