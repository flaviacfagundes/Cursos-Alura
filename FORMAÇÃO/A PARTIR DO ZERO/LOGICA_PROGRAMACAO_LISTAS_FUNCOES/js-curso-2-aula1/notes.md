
# CURSO ALURA - LÓGICA DE PROGRAMAÇÃO COM JAVASCRIPT (LISTAS E FUNÇÕES)


- Vamos manipular o arquivo HTML com o Javascript. Normalmente o que vai no HTML são coisas que não sofreram muitas alterações na página, ou não
terão muitas ações na página.

- O Javascript lê linha a linha, então tem que prestar atenção na hora de definir uma variável para não definir em cima da onde ela vai ser realmente
usada. Caso isso ocorra, o Javascript vai gerar algum tipo de erro.

- Além disso, é uma linguagem não tipada, ou seja podemos mudar o tipo de dado de uma variável a qualquer momento.

---


### **DOCUMENT**

Vai ir para um documento HTML, que esteja referenciado a ele.

---


### **QUERYSELECTOR**

Já esse vai selecionar o elemento especifico que a gente quer, basta especificar entre parenteses, e entre aspas.

    document.querySelector('h1')

---


### **.INNERHTML**

Vai inserir um conteúdo dentro do elemento que foi selecionado.

---


### **FUNCTION**

Vai criar uma função no Javascript que vai executar o que for pedido quando for chamada no HTML.
As funções são importantes para evitar repetições de códigos, e para facilitar a manutenção do código.
Elas podem ou não receber parâmetros. Os parâmetros é(são) o(s) valor(es) que ficam dentro dos parenteses antes de abrir as chaves {}

    SEM parâmetros → é necessário apenas chamar a função. Por exemplo: chamarFuncao();

    COM parâmetros → ao chamar a função é necessário colocar o valor que será subtituido no HTML, na ordem que eles foram definidos na função
        Por exemplo: `callFuncion('texto do parâmetro', 10);`

---


### **INPUT**

É a entrada de dados, onde o usuário vai inserir alguma informação de acordo com o tipo de input que foi definido.
Para pegar o valor do input, basta usar o `.value`.

---


### **BOOLEAN**

É um tipo de dado que só tem dois valores, **true** ou **false**.

---


### **.VALUE**

Vai se referenciar ao valor de um determinado campo, tanto para validação de resposta tanto para alteração do valor da variável

---


### **TOFIXED**

Faz com que mostre um certo número de casas decimais que você vai definir.

    variavel.toFixed(x);

---


### **REPLACE**

Substitui um caractere (ou palavra) por outro.

    variavel.replace('caractere1','caractere2');

---


# LISTAS 

O primeiro elemento de uma lista sempre vai ter o índice 0 (indíce é a posição do elemento na lista)
Para declarar uma lista, é necessário atribuir um nome a ela, e colocar os elementos dela entre conchetes []
Dentro dos colchetes, colocamos os elementos da lista, separados por vírgulas.

    let lista = ["Elemento Número Um", "Elemento Número Dois", "Elemento Número Três"];

Os valores em uma array podem ser de qualquer tipo de dado, como números, strings, objetos, outras arrays e assim por diante.

---


### **.LENGHT**

Retorna o tamanho da lista, o número de elementos que ela possuí.

Para acessar um elemento específico, usamos o nome da lista seguido do índice entre colchetes.

    lista[1] → "Elemento Número Dois"

Se passar um indíce que não existe na lista, por exemplo 90, ele retorna `undefined`

---


### **RECURSÃO**

Recursão é quando uma função chama a ela mesma. É importante ter cuidado com a recursão em projetos grandes, pois ela pode consumir muitos recursos do computador.

No caso desse código, a função gerarNumeroAleatorio() foi chamada novamente para que caso o número sorteado já estiver na listaDeNumerosSorteados[], ele vai gerar um novo número secreto, caso não 
esteja vai retornar o número sorteado.

---


### **.PUSH E .POP**

- `.push` → Adiciona um item no final de uma lista no Javascript.
- `.pop` → Remove o último elemento de uma lista.

---



# SCRIPT NO INDEX.HTML


<script src="https://code.responsivevoice.org/responsivevoice.js"></script>

Essa linha de código traz alguns códigos em Javascript para o nosso projeto que possuem a capacidade de falar. Portanto, escrevemos um texto e ele conseguirá narrá-lo. ---> O nome dele é **Responsive Voice**.

    Para usa-lo você precisa chamar a função própria dele responsiveVoice.speak() e como parâmetros:

        1. Colocar o que ele deve falar;
        2. Em qual idioma;
        3. Velocidade de reprodução (entre chaves).

    responsiveVoice.speak('texto', 'Brazilian Portuguese Female', {rate:1.0});

Quando você rodar o código vai aparecer uma caixinha perguntando se você permite ou não, esse permitir é em relação ao som, então é permitir.

---