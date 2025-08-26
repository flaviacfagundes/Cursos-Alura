
# GIT INIT


Para que possamos realizar o controle de versão de um projeto, registrando as mudanças realizadas nele ao longo do tempo, devemos, primeiramente, tranformar o diretório do projeto em um repositório **Git**. O comando `git init` é utilizado para esse objetivo, devendo ser executado apenas **uma vez**. Quando executado, ele configura o diretório atual para ser rastreado pelo Git, inicializando um repositório vazio.

É importante se atentar a isso, pois o comando `git init` transforma o diretório atual em um repositório do Git, logo ele deve ser executado **dentro** do diretório do projeto e não em outros diretórios do computador.

Ao executar o comando, note que a saída no terminal foi a mensagem `Initialized empty Git repository in /home/rodrigo/Projetos/alura/meu-projeto/.git/`. 

Essa mensagem indica que o comando foi executado corretamente e um repositório local do Git foi criado com sucesso nesse diretório. A partir desse ponto, já podemos trabalhar no projeto, adicionando arquivos, realizando modificações e registrando as mudanças no Git.

Se você executar o comando `git init` em um diretório que já foi inicializado como um repositório Git, a seguinte mensagem será exibida:

    Reinitialized existing Git repository in /home/rodrigo/Projetos/alura/meu-projeto/.git/

Caso esse equivoco tenha acontecido, não precisa se preocupar, pois todo o histórico de mudanças e commits no projeto não será apagado. O Git detecta que o diretório já era um repositório Git e com isso o comando não tem efeito nenhum.


Na dúvida, antes de executar o comando `git init`, execute primeiramente o comando `git status`. Se aparecer a mensagem: 

    fatal: not a git repository (or any of the parent directories): .git

Significa que o diretório atual não é um repositório Git e você pode então executar o comando `git init`.


---

# GIT PUSH | GIT PULL

- O comando `git push` deve ser executado para sincronizar as mudanças do repositório local com o repositório remoto, ou seja, quando desejamos enviar os novos commits que realizamos em nosso repositório local para o repositório remoto. 

        git push origin main

- O comando `git pull` vai baixar os commits do repositório remoto para o repositório local.

        git pull origin main


---

# CHAVE SSH

Ao vincular um repositório remoto ao nosso repositório local, via comando `git remote add`, precisamos utilizar algum protocolo seguro, como **HTTPS** ou **SSH**.

Antes de executar o comando `git push`, precisamos gerar uma **chave SSH**. A geração da chave é feita via terminal, com o comando: 

    ssh-keygen -t ed25519 -C "SEU EMAIL AQUI"

A primeira pergunta é para indicarmos o diretório em nosso computador no qual a chave será salva, sendo que entre parênteses é indicado o diretório padrão. O recomendado é apenas apertar a tecla enter no teclado para que a chave seja salva no diretório padrão, pois assim o Git consegue encontrar essa chave automaticamente sempre que executarmos o comando git push.

    Generating public/private ed25519 key pair.
    Enter file in which to save the key (/home/rodrigo/.ssh/id_ed25519):

Após apertar a tecla enter, uma nova pergunta será apresentada no terminal:

    Enter passphrase (enter for no passphrase):

Essa segunda pergunta é para indicarmos se desejamos adicionar uma senha à chave SSH que será gerada. Caso você digite uma senha, toda vez que executar o comando `git push` será necessário digitar tal senha. Ao não digitar nada e apenas apertar a tecla enter, a chave será gerada sem a proteção de uma senha.

Por fim, a terceira e última pergunta é apenas para confirmar a senha anterior:

    Enter same passphrase again:


**Observação:** Nesse diretório serão gerados dois arquivos que representam a chave SSH, sendo um para a chave privada (arquivo id_ed25519) e o outro para a chave pública (id_ed25519.pub).


---

# GIT REMOTE

Para fazer o link entre o repositório local, que está em nosso computador, com o repositório remoto, que está no GitHub, devemos utilizar o comando `git remote`.

Esse comando tem algumas variações e parâmetros opcionais que podem ser úteis em certas situações. Confira a seguir exemplos de uso desse comando:

| N° | COMANDO | O QUE FAZ |
|:---:|:---:|:---:|
| 1 | git remote add nome_repositorio path_repositorio | Adicionar um repositório remoto |
| 2 | git remote -v | Listar os repositórios remotos |
| 3 | git remote remove nome_repositorio | Remover um repositório remoto |
| 4 | git remote set-url nome_repositorio https://github.com/seu-usuario/seu-repositorio.git | Alterar a URL de um repositório remoto |
| 5 | git remote rename nome_repositorio novo-repositorio | Alterar o apelido de um repositório remoto |


Lembre-se de que o comando `git remote` é fundamental para a gestão de conexões entre seu repositório local e repositórios remotos, permitindo a colaboração eficiente e o controle de versão.


---

# GIT ADD | GIT CLONE | GIT STATUS

- **add** → vai adicionar todos os arquivos daquele diretório para o repositório Git.

        git add .

- **clone** → ele vai clonar um repositório na sua máquina, com o comando:

        git clone url-do-repositorio

- **status** → mostra como está o status do projeto, se tem alteração feita por você no repositório, que está pendente, que ainda precisa realizar o commit.

        git status


---

# GIT COMMIT | GIT LOG

- **commit** → Vai registrar as mudanças do repositorio. O commit sempre precisa ter uma mensagem indicando qual foi a alteração feita.

        git commit -m "alteracao-feita"

- **Editar o nome do último commit** → adicionando o parâmetro `amend` no commit ele vai alterar o último commit (nome do commit) para um novo que vai ser definido.

        git commit --amend -m "novo-nome"

- **log** → Vai mostrar o histórico de alterações que foram feitas naquele repositório, quem fez as mudanças, a data das mudanças e o nome do commit.

        git log


---

# GIT REVERT | GIT RESET 

- **revert** → O `git revert` cria um novo commit que desfaz as alterações feitas por um commit específico, permitindo que você volte a uma versão anterior do código sem perder o histórico de commits.

                git revert id-do-commit

- **reset** → Esse comando é útil quando você quer remover commits que não fazem mais sentido

                git reset --hard id-do-commit-anterior

---

# SINALIZAÇÃO EM ARQUIVOS DO VS CODE

- **M**: A letra M representa o estado Modified, do português modificado. Isso significa que o arquivo já existia no repositório, mas que recebeu alguma modificação que ainda não foi registrada no Git.

- **U**: A letra U representa o estado Untracked, do português não rastreado. Isso significa que o arquivo ainda não existia no repositório e que ainda não teve seu registro (commit) feito no Git.


---

