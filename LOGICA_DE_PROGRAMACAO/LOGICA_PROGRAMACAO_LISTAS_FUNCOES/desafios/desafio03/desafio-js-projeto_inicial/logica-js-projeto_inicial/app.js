
// DESAFIO 01

function calcularImc(peso,alturaCorrigida){
    let imc = peso/(alturaCorrigida**2);
    let imcFormatado = imc.toFixed(2); // toFixed → faz com que só mostre certo número de casas decimais da virgula
    alert(`Seu IMC é igual a ${imcFormatado}`);
}

function exercicio1(){
    let peso = prompt('Digite seu peso em kilos: ');
    let altura = prompt('Digite sua altura em metros: ');
    let alturaCorrigida = altura.replace(",","."); // replace → substitui um caractere (ou palavra) por outro 
    calcularImc(peso,alturaCorrigida);
}

// DESAFIO 02

function calcularFatorial(numero){
    if(numero == 1 || numero == 0) {
        return 1;
    } else if (numero > 0) {
        let fatorial = 1;
        for(let i = 2; i <= numero; i++) {
            fatorial *= i;
        }
        return fatorial;
    }
}

function exercicio2(){
    let numero = prompt('Digite um número para que saber o fatorial dele: ');
    let resultado = calcularFatorial(numero);
    alert(`O fatorial do número ${numero} é igual a ${resultado}`);
}

// DESAFIO 03
function converterParaReais(valorEmDolar) {
    let cotacaoDolar = 4.80;
    valorResutado = valorEmDolar * cotacaoDolar;
    valorEmReais = parseFloat(valorResutado).toFixed(2);
    return valorEmReais;
}

function exercicio3() {
    let valorEmDolar = prompt('Qual o valor em dólar que você quer saber quanto é em reais?');
    let valorFinal = converterParaReais(valorEmDolar);

    let palavraDolar = valorEmDolar > 1 ? 'dólares' : 'dólar';
    let palavraReal = valorEmReais > 1 ? 'reais' : 'real';

    alert(`${valorEmDolar} ${palavraDolar} é ${valorFinal} ${palavraReal}`);
}

// DESAFIO 04 
function calcularAreaRetangulo(alturaRetangulo, larguraRetangulo) {
    return alturaRetangulo * larguraRetangulo;
}

function calcularPerimetroRetangulo(alturaRetangulo, larguraRetangulo) {
    return 2 * (alturaRetangulo + larguraRetangulo);
}

function exercicio4() {
    let alturaRetangulo = prompt('Qual é a altura da sala retângular?');
    let larguraRetangulo = prompt('Qual é a largura da sala retângular?');

    let valorAreaRetangulo = calcularAreaRetangulo(alturaRetangulo, larguraRetangulo);
    console.log(valorAreaRetangulo);

    let valorPerimetroRetangulo = calcularPerimetroRetangulo(alturaRetangulo, larguraRetangulo);
    console.log(valorPerimetroRetangulo);

    alert(`A área da sala retangular é igual a ${valorAreaRetangulo} e seu perímetro é a igual a ${valorPerimetroRetangulo}`);
}

// DESAFIO 05
pi = 3.14;

function calcularAreaCirculo(raioCirculo) {
    return 2 * raioCirculo * pi;
}

function calcularPerimetroCirculo(raioCirculo) {
    return pi * (raioCirculo * raioCirculo);
}

function exercicio5() {
    let raioCirculo = prompt('Qual o valor do raio da sala circular?');

    let valorAreaCirculo = calcularAreaCirculo(raioCirculo);
    console.log(valorAreaCirculo);

    let valorPerimetroCirculo = calcularPerimetroCirculo(raioCirculo);
    console.log(valorPerimetroCirculo);

    alert(`A área da sala circular é igual a ${valorAreaCirculo} e seu perímetro é igual a ${valorPerimetroCirculo}`);
}

// DESAFIO 06
function mostrarTabuada(num) {
    i = 1;
    while(i < 11) {
        console.log(num + ' * ' + i + " = " + (num * i));
        i++;
    }
}

function exercicio6() {
    let num = prompt('Digite um número para ver sua tabuada:');
    mostrarTabuada(num);
    alert('Abra o console!');
}
