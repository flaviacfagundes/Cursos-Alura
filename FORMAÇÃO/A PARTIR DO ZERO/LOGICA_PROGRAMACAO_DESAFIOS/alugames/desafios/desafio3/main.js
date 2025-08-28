let tituloDoCampo = document.getElementById('label-input');

function verificarPalavra() {
    let palavra = document.getElementById('palavra-digitada').value;
    if (palavra == '') {
        alert('O campo está vazio. Favor verificar!');
        return;
    }

    let palavraInvertida = palavra.split("").reverse().join("");

    if (palavraInvertida == palavra) {
        tituloDoCampo.innerHTML = `Sim, a palavra <strong>${palavra}</strong> é um palíndromo!`;
    } else {
        tituloDoCampo.innerHTML = `Não, a palavra <strong>${palavra}</strong> não é um palíndromo! <br> 
        Invertida ela fica dessa maneira: <strong>${palavraInvertida}</strong>`;
    }
    
}

// Fazer função para reiniciar os campos