// DESAFIO 01
console.log('Seja Muito Bem-Vindo(a)!');

// DESAFIO 02
let nome = 'Flávia';
console.log(`Olá, ${nome}!`);

// DESAFIO 03
let meuNome = 'Flávia';
alert(`Olá, ${meuNome}!`);

// DESAFIO 04
let linguagemDeProgramacao = prompt('Qual é a linguagem de programação que você mais gosta?');
console.log(linguagemDeProgramacao);

// DESAFIO 05
let valor1 = 7;
let valor2 = 45;
let resultadoSoma = valor1 + valor2;
console.log(`A soma entre ${valor1} e ${valor2} é igual a ${resultadoSoma}.`);

// DESAFIO 06
let valor01 = 100;
let valor02 = 75;
let resultadoSubtracao = valor01 - valor02;
console.log(`A subtração entre ${valor01} e ${valor02} é igual a ${resultadoSubtracao}.`);

// DESAFIO 07
let idadeUsuario = prompt('Qual é a sua idade?');
if (idadeUsuario >= 18){
    console.log('O Usuário é maior de idade.');
} else {
    console.log('O Usuário é menor de idade.');
}

// DESAFIO 08
let numero = prompt('Digite um número: \n(pode ser um número negativo, positivo ou zero.)');
if (numero > 0) {
    console.log('O número é positivo.');
} else if (numero < 0) {
    console.log('O número é negativo.');
} else {
    console.log('O número é igual a zero.');
}

// DESAFIO 09
let contador = 1;
while (contador < 11) {
    console.log(contador);
    contador++;
}

// DESAFIO 10
let nota = 7;

// let aprovacao = nota >= 7 ? 'Aprovado(a)!' : 'Reprovado(a)!';
// console.log(aprovacao);

if (nota >= 7) {
    console.log('Aprovado(a)!');
} else {
    console.log('Reprovado(a)!');
}

// DESAFIO 11
let numeroAleatorio = Math.random();
console.log(numeroAleatorio);

// DESAFIO 12
let numeroAleatorio1a10 = parseInt(Math.random() * 10 + 1);
console.log(numeroAleatorio1a10);

// DESAFIO 13
let numeroAleatorio1a1000 = parseInt(Math.random() * 1000 + 1);
console.log(numeroAleatorio1a1000);
