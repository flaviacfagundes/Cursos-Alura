//   DESAFIO 01

let diaDaSemana = prompt('Qual é o dia da semana que estamos hoje? \n(Segunda/Terça/Quarta/Quinta/Sexta/Sábado/Domingo)\n');
console.log(diaDaSemana);
if (diaDaSemana == 'Sábado') {
    alert('Bom fim de semana!');
} else if (diaDaSemana == 'Domingo') {
    alert ('Bom fim de semana!');
} else {
    alert('Boa semana!');
}

//   DESAFIO 02
let numeroDigitado = prompt('Digite um número e direi se ele é positivo ou negativo:\n');
console.log(numeroDigitado);
if (numeroDigitado >= 0) {
    alert('É um número positivo!');
} else {
    alert('É um número negativo!');
}

//  DESAFIO 03
let pontuacao = prompt('Qual foi a sua pontuação ao final no jogo?\n');
console.log(pontuacao);
if (pontuacao >= 100) {
    alert('Parabéns! Você venceu!');
} else {
    alert('Tente novamente para ganhar.');
}

// DESAFIO 04
let saldoDaConta = prompt('Quantos reais você tem em sua conta agora?\n');
console.log(saldoDaConta);
alert(`O saldo na sua conta bancária é de ${saldoDaConta} reais.`);

// DESAFIO 05
let nomeDoUsuario = prompt('Qual é o seu nome?\n');
console.log(nomeDoUsuario);
alert(`Olá, ${nomeDoUsuario}! Seja muito bem-vindo(a)!`);