
// DESAFIO 01 
let minhaLista = [];
minhaLista.push(1, 2, 3);
console.log(minhaLista);

let minhaOutraLista = [];
minhaOutraLista.push(4, 5, 6);
console.log(minhaOutraLista);

novaLista = minhaLista.concat(minhaOutraLista);
console.log(novaLista);

// DESAFIO 02 
novaLista.pop(novaLista.lenght - 1);
console.log(novaLista);

// DESAFIO 03 
function shuffle(novaLista) {
    for (let i = novaLista.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [novaLista[i], novaLista[j]] = [novaLista[j], novaLista[i]];
    }
}

shuffle(novaLista);
console.log(novaLista);

// DESAFIO 04 
novaLista.push(1, 2, 3, 4, 5);
console.log(novaLista);

let novoArray = [];
function removerDuplicadas(array) {
    for (let i = 0; i < array.length; i++) {
        if (!novoArray.includes(array[i])) {
            novoArray.push(array[i]);
        }
    }
}

removerDuplicadas(novaLista);
console.log(novoArray);
