 // DESAFIO 01
 let tituloh1 = document.querySelector('h1');
 tituloh1.innerHTML = 'Hora do Desafio!';

 //DESAFIO 02
 function verificarBotaoConsole(){
    console.log('O botão foi clicado!');
 }

 //DESAFIO 03
 function verificarBotaoAlert(){
    alert('Eu amo JS!');
    console.log('O botão alert foi clicado!')
 }

 //DESAFIO 04
 function verificarBotaoPrompt(){
    let cidade = prompt('Digite o nome de uma cidade do Brasil: ');
    console.log(cidade);
    alert(`Estive em ${cidade} e lembrei de você!`);
 }

//DESAFIO 05
 function verificarBotaoSoma(){
    let numero1 = parseInt(prompt('Digite um número inteiro:'));
    console.log(`Primeiro Número: ${numero1}`);
    let numero2 = parseInt(prompt('Digite mais um número inteiro:'));
    console.log(`Segundo Número: ${numero2}`);

    // DESAFIO 06
    let resultado = numero1 + numero2;
    console.log(`Resultado da soma: ${resultado}`);
    alert(`O resultado da soma entre esses dois números é: ${resultado}`);
 }