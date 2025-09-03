
# JOGO JS - CURSO ALURA: LÓGICA DE PROGRAMAÇÃO

- Para desenvolver esse jogo, os professores da Alura vão usar a linguagem de programação `Javascript`.

- Esse jogo pretende nos ajudar a dar os primeiros passos para a Lógica de Programação.

- Foi escolhida essa linguagem por ser uma linguagem fácil e não precisar baixar mais nada no computador para poder programar com ela.

---



# DESENVOLVENDO O JOGO


### **ALERT**

Para passar uma mensagem para a pessoa que vai desenvolver o jogo, vamos usar o `alert()`.
Dentro dos parenteses eu posso escrever essa mensagem, mas ela precisa estar entre aspas, duplas ou simples, as duas vão funcionar.

> O ideal é que se você começa a programar usando aspas duplas (por exemplo), você usa as aspas duplas no projeto inteiro.

---


### **PONTO E VIRGULA**

É sempre bom no JS, quando você termina um comando, em uma linha de comando, que você coloque o ponto e virgula (;)
É uma boa prática de programaçao, colocar o ponto e virgula manualmente para evitar ambiguidade e problemas de interpretação.

> Em projetos colaborativos ou de grande escala, a concistência no estilo de codificação e a clareza do código são cruciais.

---


### **VARIAVEL LET**

Para a gente conseguir guardar alguma informação no nosso programa, usamos um conceito chamado Variáveis.
No Javascript, para criar essa váriavel, utilizamos o `let` depois dá o nome da váriavel, que no JS, segue esse padrão = numeroSecreto.

> É importante que as váriaveiss tenham um nome que represente as funções delas.

O `let` significa que vamos separar um espaço na memória para guardar aquela informação.
Para atribuir um valor a uma váriavel, usamos somente um sinal de igual, mas para comparar usamos dois sinais de igual, no JS.

---


### **PROMPT**

Para permitir que o usuário possa escrever o número, vamos usar o `prompt()`. Ele é parecido com o `alert()`, porém ele permite que uma mensagem 
seja escrita.

---


### **IF / ELSE**

Quando queremos fazer uma condição para validar se o número que o usuário colocou é igual ao número secreto, usanmos o `if` e o `else`.
No Javascript a condição fica entre parênteses. Então → if (...)

Continuando a estrutura `if` e `else` no Javascript, quando se coloca a condição entre parenteses, ela só será executada se for verdadeira, e o 
código que será executado deverá estar entre chaves. O `else` é colocado depois de se fechar as chaves do `if`.

---


### **CONSOLE NO NAVEGADOR**

`console.log()` → clica com o botão direito na página, clica em inspecionar, e clica em Console.

- Ou clica `ctrl + shif + c` e clica em Console.
- Ou clica F12 no telclado.
- Para limar o console basta utilizar o atalho "ctrl + L"

> `console.log()` é uma ferramento do desenvolvedor, não do usuário.
    
É importante lembrar que, quando o projeto ficar disponível para todas as pessoas, o que chamamos no contexto de software de ambiente de produção, 
os comandos console.log devem ser removidos ou desabilitados, pois podem causar problemas de desempenho e segurança.

---


### **ACOPLAMENTO**

É quando nosso código está muito junto, se alterar uma parte, as outras partes que deveriam se alterar automaticamente, não vão ser.

---


### **TEMPLATE STRINGS**

Usado para quando for juntar textos com valores de variáveis e até números diferentes.
Usa-se crase ao invés das aspas, e para chamar a variável coloca um cifrão ($), e o nome da variável entre chaves.

    texto ${nome_da_variavel}

---


### **WHILE**

A estrutura do while é pararecida com a estrutura `if` e `else`

    while (condição) {
        código
    }

---


### **BREAK**

O `break` é um comanfo que serve para parar a execução de um laço de repetição, como o `while` ou o `for`.

---


### **OPERADORES DE COMPARAÇÃO**

O sinal para representar o sinal de 'diferente', em uma comparação, no Javascript (e em diversas outras linguagens), é != (esclamação + igual)

- Operadores de comparação:

| SINAL | SIGNIFICADO |
|:-----:|:-----------:|
| > | maior |
| < | menor |
| >= | maior ou igual |
| <= | menor ou igual |
| == | igual |
| != | diferente |

---


### **ADIÇÃO E SUBTRAÇÃO EM VARIÁVEIS**

Quando coloca-se ++ do lado de uma variável é a mesma coisa de fazer um += 1, ou simplesmente somar 1 ao valor da variável.
Assim como quando colocamos -- é a mesma coisa de fazer -= 1, ou simplesmente subtrair 1 do valor da variável.

---


### **OPERADORES LÓGICOS**

Operadores lógicos:

    && → AND (e) - é utilizado para avaliar se duas condição são verdadeiras. Se ambas forem verdadeiras, o resultado é verdadeiro.
                    Caso contrário, o resultado é falso.
    || → OR (ou) - é usado para verificar se pelo menos uma das opções é verdadeira. Se uma for verdadeira, o resultado é verdadeiro.
                    Se ambas forem falsas, o resultado será falso.
    ! → NOT (não) - verdadeiro quando a condição é falsa, e falso quando a condição é verdadeira.

---


### **OPERADOR TERNÁRIO**

Em uma aula sobre Operador Ternário, aprendi que podemos (por exemplo) substituir 5 linhas de códio, por apenas 1.
No caso a condição para verificar a palavra tentativa:

    if (tentativas > 1) { // Essa condição é para manter a concordância textual do jogo, caso maior que 1, vai ser TENTATIVAS
        alert(`Isso aí! Você acertou o número secreto! (${numeroSecreto}) \nCom ${tentativas} tentativas.`);
    } else { // Caso contrário, vai ser TENTATIVA
        alert(`Isso aí! Você acertou o número secreto! (${numeroSecreto}) \nCom ${tentativas} tentativa.`);
    }

Pode ser substituido por:

~~~~
let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';

alert(`Isso aí! Você acertou o número secreto! (${numeroSecreto}) \nCom ${tentativas} ${palavraTentativa}.`);
~~~~

Lendo essa estrutura, seria:

Criamos uma variável para a palavra tentativa, para verificar se usaremos no plural ou no singular
[Tentativa é maior que 1? Se sim, exibe a palavra/string (tentativas), se não, exibe a palavra/string (tentativas)]
[Se tentativas for maior que 1 (tenttivas > 1), a variável recebe o valor (tentativas), se não (:), a variável recebe o valor (tentativa)]

---


### **RANDOM**

Para gerar um número aleatório, usamos o `Math.random()`.

Porém, ele gera um número pseudo aleatório entre 0 e 1. Para gerar um número aleatório entre 0 e 10, por exemplo, usamos o `Math.random() * 10`.
Só que no `Math.random()`, o número 1 é ignorado, então para gerar um número aleatório entre 0 e 10, por exemplo, apenas somamos 1.
~~~~
Math.random() * 10 + 1
~~~~
Quando gerado esse número, vai ter um número inteiro depois do ponto, porém ainda vai continuar com vários números depois dele.

---


### **PARSEINT**

Para considerarmos somente a parte inteira, usamos o comando `parseInt()`.
Além disso, o `parseInt()` também é utilizado para converter uma string em um número inteiro.

---
