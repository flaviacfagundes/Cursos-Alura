
function desafio04() {
    num1 = parseInt(prompt('Digite o primeiro número: '));
    num2 = parseInt(prompt('Digite o segundo número: '));

    console.log(`Primeiro número digitado: ${num1}`);
    console.log(`Segundo número digitado: ${num2}`);

    let resultado = num1 + num2;

    console.log(`O resultado da soma entre ${num1} e ${num2} é igual a ${resultado}`);
    alert(`${num1} + ${num2} é igual a ${resultado}`);
}

function desafio05() {
    let nomeIdade = prompt('Digite seu nome e idade conforme o exmplo: \nnome;idade\n');
    let nomeIdadeMaePai = prompt('Digite o nome e idade dos seus pais conforme o exmplo: \nNome Mãe;Idade Mãe;Nome Pai;Idade Pai\n');

    let nome = nomeIdade.split(';')[0];
    let idade = nomeIdade.split(';')[1];

    let nomeMae = nomeIdadeMaePai.split(';')[0];
    let idadeMae = nomeIdadeMaePai.split(';')[1];
    let nomePai = nomeIdadeMaePai.split(';')[2];
    let idadePai = nomeIdadeMaePai.split(';')[3];

    console.log(`O nome do usuário é ${nome}. E tem ${idade} anos de idade.`);
    console.log(`O nome da mãe é ${nomeMae}. E ela tem ${idadeMae} anos de idade.`);
    console.log(`O nome do pai é ${nomePai}. E ele tem ${idadePai} anos de idade.`);

    confirm(`Confirme os dados por favor: \n\nSeu nome: ${nome}\nSua idade: ${idade} 
        \nNome da mãe: ${nomeMae} \nIdade da mãe: ${idadeMae}
        \nNome do pai: ${nomePai} \nIdade do pai: ${idadePai}\n`);
    
}

function desafio06() {
    let altura = prompt('Digite sua altura em metros: \nExemplo: 1,50\n');
    let metro = altura.split(',')[0];
    let centimetro = altura.split(',')[1];

    let palavraMetro = metro > 1 ? 'metros' : 'metro';

    console.log(`O usuário possuí ${metro} ${palavraMetro} e ${centimetro} centimetros.`);
    alert(`Você tem ${metro} ${palavraMetro} e ${centimetro} centimetros de altura.`);

}