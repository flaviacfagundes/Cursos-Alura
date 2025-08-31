
function adicionar() {
    let produtoAdicionado = document.getElementById('produto').value;
    let quantidadeDeProduto = parseInt(document.getElementById('quantidade').value);

    if (!quantidadeDeProduto || quantidadeDeProduto <= 0) { // Desafio 01
        alert('Quantidade inválida de produtos.');
        document.getElementById('quantidade').value = '';
        return;
    }

    let valorProduto = parseInt(produtoAdicionado.split('R$')[1].trim());
    let valorTotalProduto = valorProduto * quantidadeDeProduto;
    
    adicionarAoCarrinho(quantidadeDeProduto, produtoAdicionado, valorTotalProduto);
    calcularTotal(valorTotalProduto);
    document.getElementById('quantidade').value = '';
}

function adicionarAoCarrinho(quantidadeDeProduto, produtoAdicionado, valorTotalProduto) {
    let produto = produtoAdicionado.split('-')[0].trim();

    let novoItemCarrinho = document.createElement('section');
    novoItemCarrinho.className = 'carrinho__produtos__produto';
    novoItemCarrinho.innerHTML = `<span class="texto-azul">${quantidadeDeProduto}x</span> ${produto} <span class="texto-azul">R$${valorTotalProduto}</span>`;

    let carrinho = document.getElementById('lista-produtos');
    carrinho.appendChild(novoItemCarrinho);
}

let total = 0;

function calcularTotal(valorTotalProduto) {
    let somarProdutos = parseInt(total + valorTotalProduto);
    total = somarProdutos;
    let campoTotal = document.getElementById('valor-total');
    campoTotal.innerHTML = `R$ ${total}`;
}

function limpar() {
    total = 0;
    document.getElementById('valor-total').innerHTML = 'R$ 0';
    let produtosCarrinho;
    while (produtosCarrinho = document.querySelector('.carrinho__produtos__produto')){
        produtosCarrinho.remove();
    }
    
}

// PEGAR VALOR DO PRODUTO

//  O .split() separa a string em partes, a partir do parâmetro que você passa
//  Entre conchetes fica o número 1 pois quero o valor que fica depois da sepração
//  Se eu quisesse antes, é só colocar o 0 entre os conchetes
//  E o .trim() serve para tirar espaços em branco

// ADICIONAR ITEM NO CARRINHO

//  appendChild() é um método JavaScript para manipular a DOM (Document Object Model) que insere um novo nó 
//  (elemento ou nó de texto) como o último filho de um nó pai existente, permitindo a construção dinâmica de páginas web. 
//  appendChild() adiciona um elemento à estrutura da página. 
