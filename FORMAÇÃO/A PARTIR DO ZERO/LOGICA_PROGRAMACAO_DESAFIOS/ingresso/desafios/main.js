
function desafio03() {
    let num1 = parseInt(document.getElementById('num1').value);
    let num2 = parseInt(document.getElementById('num2').value);
    let operacao = document.getElementById('operacoes').value;
    let operador;

    if (!num1 || !num2) {
        alert('Necessário adicionar valor aos campos!');
        return;
    }

    if (operacao == 'adicao') {
        operador = '+';
    } else if (operacao == 'subtracao') {
        operador = '-';
    } else if (operacao == 'multiplicacao') {
        operador = '*';
    } else if (operacao == 'divisao') {
        operador = '/';
    }

    let resultado = calcular(num1, operacao, num2);
    alert(`${num1} ${operador} ${num2} = ${resultado}`);
}

function calcular(num1, operacao, num2) {
    if (operacao == 'adicao') {
        return num1 + num2;
    } else if (operacao == 'subtracao') {
        return num1 - num2;
    } else if (operacao == 'multiplicacao') {
        return num1 * num2;
    } else if (operacao == 'divisao') {
        return num1 / num2;
    }
}

function desafio04() {
    let numero = parseInt(document.getElementById('numImparPar').value);

    if (!numero) {
        alert('Necessário digitar um número!');
        return;
    }

    if (numero % 2 === 0) {
        alert(`${numero} é um número par!`);
    } else {
        alert(`${numero} é um número impar!`);
    }
}

function desafio05() {
    let temperatura = parseFloat(document.getElementById('numero-temperatura').value);
    let graus = document.getElementById('temperaturas').value;
    let conversao;

    if (!temperatura) {
        alert('Necessário digitar algum valor!');
        return;
    }

    if (graus == 'celcius') {
        conversao = (temperatura * 1.8) + 32;
        alert(`${temperatura}°C é o equivalente a ${conversao}°F`);
    } else if (graus == 'fahrenheit') {
        conversao = (temperatura - 32) / 1.8;
        alert(`${temperatura}°F é o equivalente a ${conversao}°C`);
    } else {
        alert('Deu ruim!');
    }

}
