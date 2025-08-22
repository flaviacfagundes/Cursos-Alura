
// DESAFIO 01

function calcularImc(peso,alturaCorrigida){
    imc = peso/(alturaCorrigida**2);
    imcFormatado = imc.toFixed(2); // toFixed → faz com que só mostre certo número de casas decimais da virgula
    alert(`Seu IMC é igual a ${imcFormatado}`);
}

function exercicio1(){
    peso = prompt('Digite seu peso em kilos: ');
    altura = prompt('Digite sua altura em metros: ');
    alturaCorrigida = altura.replace(",","."); // replace → substitui um caractere (ou palavra) por outro 
    calcularImc(peso,alturaCorrigida);
}

// DESAFIO 02

function calcularFatorial(fatorial){
    for(fatorial > 0; fatorial--;){
        fatorial = fatorial * (fatorial - 1);
        console.log(fatorial);
    }
}

function exercicio2(){
    fatorial = prompt('Digite um número para que saber o fatorial dele: ');
    calcularFatorial(fatorial);
}