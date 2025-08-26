alert('Boas vindas ao jogo do número secreto!');
let numeroMaximo = 5000
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1); // Número aleatório gerado pelo JS
console.log(numeroSecreto);
let chute;
let tentativas = 1;

// Enquanto o chute não for igual ao número secreto
while (chute != numeroSecreto) {
    chute = prompt(`Escolha um número entre 0 e ${numeroMaximo}:`); // Essa linha é um acomplamento com a linha 2
    // Se o chute for igual ao número secreto
    if (chute == numeroSecreto){
        break; // Para o programa quando o chute for igual ao número secreto
    } else {
        if (chute > numeroSecreto){
            alert(`O número secreto é menor que ${chute}`);
        } else {
            alert(`O número secreto é maior que ${chute}`);
        }
        // tentativas = tentativa + 1
        tentativas++;
    }
}

// Um jeito muito comum de se fazer um if/else, no Mercado de Trabalho

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Isso aí! Você acertou o número secreto! (${numeroSecreto}) \nCom ${tentativas} ${palavraTentativa}.`);