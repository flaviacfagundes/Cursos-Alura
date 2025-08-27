
# DOM

O **DOM** é como se fosse uma árvore genealógica, porém de forma invertida.

O elemento que antecede o `document`é o `window`, que nada mais é do que a janela do navegador. Em sua estrutura, o `document` está no topo como objeto global e tem como elemento raiz a *tag* `html` e todas as outras descendem dela através das ramificações (**branchs**).

A *tag* `html`, objeto pai, apresenta dois objetos filhos: o **head** e o **body** (o cabeçalho e o corpo). Os objetos que seguem nas ramificações a baixo são denominados como *child*, e os de cima como *parent*. 

A *tag* `head` é **parent** da *tag* `title`, e a `body` é **parent** das *tags* `a` e `h1`, e assim sucessivamente, de acordo com a hierarquia. Das tags, derivam os atributos, e destes, seus valores.


### Onde ele está inserido?

Ele é gerado pelo **browser**. Ao carregar a página, o navegador cria o documento, a interface, e o Javascript usa o **DOM** para se conectar ao **HTML**.

Para realizar a comunicação entre eles é necessário inserir a *tag* `script` no arquivo HTML, e como boa prática, ela deve estar antes do fechamento da *tag* `body` para que os scripts sejam carregados após o código base.


---

# LOOP FOR

O `loop for` é uma estrutura de repetição fundamental na programação, utilizada para executar um bloco de código repetidamente, um número específico de vezes. Ele é composto por três partes principais, **inicialização**, **condição** e **incremento/decremento**.


### Inicialização

A inicialização é a primeira parte do `loop for` e é **executada apenas uma vez**, antes do início da primeira iteração.

Geralmente, é utilizada para declarar e inicializar uma variável de controle, que será utilizada para acompanhar o número de iterações do loop.


### Condição

A condição é a segunda parte do `loop for` e é **avaliada antes de cada iteração**.

Se a condição for verdadeira (*true*), o bloco de código dentro do loop será executado.

Se a condição for falsa (*false*), o loop será interrompido e a execução do programa continuará na linha seguinte ao loop.


### Incremento/Decremento

O incremento/decremento é a terceira parte do `loop for` e é **executado após cada iteração**.

Geralmente, é utilizada para atualizar a variável de controle, incrementando ou decrementando seu valor.

O incremento/decremento permite que a condição seja eventualmente avaliada como falsa, garantindo que o loop não seja executado infinitamente.


---

# LOOP WHILE

O `loop while` é uma estrutura de controle em programação que permite executar um bloco de código repetidamente enquanto uma condição específica for verdadeira.


### Funcionamento

- **Condição**: O `loop while` começa avaliando uma condição. Essa condição é uma expressão booleana, ou seja, que retorna `true` (*verdadeiro*) ou `false` (*falso*).
- **Execução**: Se a condição for `true`, o bloco de código dentro do loop é executado.
- **Repetição**: Após a execução do bloco de código, a condição é avaliada novamente. Se ainda for `true`, o bloco de código é executado novamente. Esse processo se repete até que a condição se torne `false`.
- **Encerramento**: Quando a condição se torna `false`, o `loop while` é encerrado e o programa continua a execução a partir da próxima linha de código após o loop.


---

# CLASSLIST

A propriedade `classList` é uma ferramenta poderosa em JavaScript para manipular as classes CSS de um elemento HTML. Ela permite adicionar, remover, verificar e alternar classes de forma fácil e eficiente.

O `classList` oferece vários métodos úteis para manipular as classes CSS de um elemento:

- **add(classe1, classe2, ...)**: Adiciona uma ou mais classes ao elemento.
- **remove(classe1, classe2, ...)**: Remove uma ou mais classes do elemento.
- **contains(classe)**: Retorna `true` se o elemento possui a classe especificada, caso contrário, retorna `false`.
- **toggle(classe, force)**: Adiciona a classe se ela não existir ou remove se ela já existir. Se o segundo argumento *force* for `true`, a classe é sempre adicionada. Se for `false`, a classe é sempre removida.
- **replace(classeAntiga, classeNova)**: Substitui uma classe existente por uma nova classe.


---
