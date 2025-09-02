
// DESAFIO 01 
function verificarNumeroInteiro(num) {
    if (num > 0) {
        console.log(`${num} é um número positivo!`);
    } else if (num < 0) {
        console.log(`${num} é um número negativo!`);
    } else {
        console.log('O número é igual a 0!');
    }
}

verificarNumeroInteiro(1);
verificarNumeroInteiro(0);
verificarNumeroInteiro(-1);

// DESAFIO 02 
function validarIdade(age) {
    if (age >= 18) {
        console.log('Você é maior de idade!');
    } else if (age < 18 && age > 0) {
        console.log('Você é menor de idade!');
    } else {
        console.log('Idade inválida. Favor verificar!');
    }
}

validarIdade(18);
validarIdade(10);
validarIdade(-1);

// DESAFIO 03 
function validarString(string) {
    if (string == '') {
        console.log('Essa string está vazia!');
    } else {
        console.log(`'${string}' não é uma string vazia!`);
    }
}

validarString('Metamorfose Ambulante');
validarString('');

// DESAFIO 04 
function validarAno(year) {
    if (year % 400 == 0) {
        console.log(`${year} é um ano bissexto!`);
    } else {
        if(year % 4 == 0 && year % 100 != 0) {
            console.log(`${year} é um ano bissexto!`);
        } else {
            console.log(`${year} não é um ano bissexto!`);
        }
     }
}

validarAno(2024);
validarAno(2025);

// DESAFIO 05 
function calcularMedia(num1, num2) {
    if (!num1 || !num2) {
        console.log('Um dos números inseridos é inválido!');
        return;
    } else {
        console.log((num1 + num2) / 2);
    }
}

calcularMedia(2, 40);
calcularMedia('', 30);

// DESAFIO 06 
function tamanhoArray(array) {
    console.log(array.length);
}

tamanhoArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
tamanhoArray([1, 2, 3, 4, 5]);

// DESAFIO 07 
arrayDeFrutas = ['maça', 'banana', 'mamão', 'abacate', 'melancia', 'pera', 'laranja', 'limão'];

function procurarItemNoArray(array, fruta) {
    return array.includes(fruta);
}

console.log(procurarItemNoArray(arrayDeFrutas, 'maça'));
console.log(procurarItemNoArray(arrayDeFrutas, 'tomate'));

// DESAFIO 08 
function calcularSomaEProduto(array) {
    let somaPares = 0;
    let produtoImpares = 1;

    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            somaPares += array[i];
        } else if (array[i] % 2 === 1) {
            produtoImpares *= array[i];
        }
    }

    console.log(somaPares);
    console.log(produtoImpares);
}

calcularSomaEProduto([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
calcularSomaEProduto([1, 2, 3, 4]);
