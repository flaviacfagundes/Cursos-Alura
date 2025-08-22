// DESAFIO 01
function saudacao(){
    console.log('Olá, mundo!');
}
saudacao();


// DESAFIO 02
function nomeUsuario(nome){
    console.log(`Olá, ${nome}!`);
}
nomeUsuario("Flávia");


// DESAFIO 03
function double(num){
    resultado = num * 2;
    console.log(resultado);
}
double(5);


// DESAFIO 04
function mediaDeTresNumeros(num1, num2, num3){
    resultado = (num1 + num2 + num3) / 3;
    console.log(resultado);
}
mediaDeTresNumeros(10,20,30);


// DESAFIO 05
function numeroMaior(valor1, valor2){
    if (valor1 > valor2){
        console.log(valor1);
    } else {
        console.log(valor2);
    }
}
numeroMaior(10,20);


// DESAFIO 06
function numeroVezesEleMesmo(numero){
    resultado = numero * numero;
    console.log(resultado);
}
numeroVezesEleMesmo(7);
