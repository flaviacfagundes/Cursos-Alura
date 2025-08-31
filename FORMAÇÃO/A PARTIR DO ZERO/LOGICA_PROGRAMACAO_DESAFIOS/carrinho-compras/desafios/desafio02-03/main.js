
function cadastrar() {
    // Desafio 02
    let email = document.getElementById('user-email').value;
    let senha = document.getElementById('password').value;
    let senhaConfirmada = document.getElementById('confirmed-password').value;

    console.log(`Email inserido: ${email}`);
    console.log(`Senha digitada: ${senha}`);
    console.log(`Confirmação da senha: ${senhaConfirmada}`);

    let mensagemErro = document.querySelector('.error-message');

    // Desafio 03
    if (senha != senhaConfirmada) {
        mensagemErro.innerHTML = 'As senhas estão divergentes!';
        return;
    }

    if (email && senha && senhaConfirmada) {
        confirm(`Os dados inseridos estão corretos? \n\nEmail: ${email}\nSenha: ${senha}`);
        limparCampos();
    } else {
        alert('Necessário preencher todos os campos!');
    }
    
}

function limparCampos() {
    document.getElementById('user-email').value = '';
    document.getElementById('password').value = '';
    document.getElementById('confirmed-password').value = '';
    document.querySelector('.error-message').innerHTML = '';
}