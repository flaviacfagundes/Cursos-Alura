
# Resolvendo Conflitos

Quando você está trabalhando em um projeto grande, principalmente se muitas pessoas estão envolvidas, é comum aparecerem **conflitos**.

No mundo do desenvolvimento de software, isso ocorre quando duas pessoas editam o mesmo pedaço de código de formas diferentes.


---

# Merge Editor

Para resolvermos o conflito, clicamos na opção *Resolve in Merge Editor*.

Após o clique, somos redirecionados para outra aba que apresenta as modificações no arquivo. A tela do Visual Studio Code está dividida em três partes:

1. **Incoming (remoto)**: modificações que chegam do repositório remoto.
2. **Current (local)**: modificações locais.
3. **Result (resultado)**: resultado do merge, ou seja, a resolução dos conflitos de mesclagem. É o estado atual do arquivo.


### Campo Incoming

No campo *Incoming*, acima da linha de código dos marcadores de conflito no campo há outras opções que resultam na alteração do código atual

- **Accept Incoming**: aceita modificações oriundas do remoto
- **Accept Combination Incoming First**: realiza a combinação com as linhas do código do repositório remoto no topo.
- **Ignore**: ignora as modificações.


### Campo Current

O campo *Current* trabalha com as modificações locais do documento.

- **Accept Current**: Aceita a modificação local no resultado do documento
- **Accept combination Current First**: Aceita a combinação local + remoto. O código local é inserido primeiro que o remoto.
- **Ignore**: ignora as modificações no resultado no final.


---

# Resolução

Após selecionarmos a opção com o resultado desejado, devemos:

1. Salvar o arquivo
2. Clicar no botão “complete Merge”
3. Realizar o commit das modificações
4. Sincronizar as modificações realizando o push.


---
