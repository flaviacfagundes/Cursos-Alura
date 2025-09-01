amigos = [];

function adicionar() {
    let nome = document.getElementById('nome-amigo').value;
    let listaAmigos = document.getElementById('lista-amigos');

    if (!nome) {
        alert('Necessário digitar algum nome!');
        return;
    }

    if (amigos.includes(nome)) {
        alert('Esse nome já está na lista!');
        return;
    }

    amigos.push(nome);
    listaAmigos.innerHTML = amigos;
    document.getElementById('nome-amigo').value = '';
}

function sortear() {
    embaralhar(amigos);
    let listaSorteio = document.getElementById('lista-sorteio');

    for (let i = 0; i < amigos.length; i++) {

        if (i == amigos.length - 1) {
            listaSorteio.innerHTML = listaSorteio.innerHTML + amigos[i] + ' --> ' + amigos[0] + '<br>';
        } else {
            listaSorteio.innerHTML = listaSorteio.innerHTML + amigos[i] + ' --> ' + amigos[i + 1] + '<br>';
        }

    }

    document.querySelector('.primary').setAttribute('disabled', true);
    document.querySelector('.secondary').setAttribute('disabled', true);
}

function embaralhar(lista) {
    for (let indice = lista.length; indice; indice--) {
        const indiceAleatorio = Math.floor(Math.random() * indice);
        [lista[indice - 1], lista[indiceAleatorio]] = [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function reiniciar() {
    amigos = [];
    document.getElementById('lista-sorteio').innerHTML = '';
    document.getElementById('lista-amigos').innerHTML = '';
}
