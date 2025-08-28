let contadorDeAluguel = 0; // Desafio 02

function alterarStatus(idJogo) {
    let jogoClicado = document.getElementById(`game-${idJogo}`);
    let imagem = jogoClicado.querySelector('.dashboard__item__img');
    let botao = jogoClicado.querySelector('.dashboard__item__button');

    if (imagem.classList.contains('dashboard__item__img--rented')) {
        let confirmacao = confirm('Confirma a devolução desse jogo?'); // Desafio 01

        if(confirmacao) {
            imagem.classList.remove('dashboard__item__img--rented');
            botao.classList.remove('dashboard__item__button--return');
            botao.textContent = 'Aludar';
            alert('Item devolvido com sucesso!');
        } else {
            alert('Devolução cancelada com sucesso!'); // Desafio 01
            return;
        }

    } else {
        imagem.classList.add('dashboard__item__img--rented');
        botao.classList.add('dashboard__item__button--return');
        botao.textContent = 'Devolver';
        contadorDeAluguel ++;
        console.log(`Total de jogos alugados: ${contadorDeAluguel}`); // Desafio 02
    }
}
