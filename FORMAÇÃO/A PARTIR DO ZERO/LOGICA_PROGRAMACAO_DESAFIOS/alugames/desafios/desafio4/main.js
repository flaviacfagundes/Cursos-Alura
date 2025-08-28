
function ordenarNumeros() {
    let numberOne = document.getElementById('number-one').value;
    let numberTwo = document.getElementById('number-two').value;
    let numberThree = document.getElementById('number-three').value;

    if (numberOne == '' || numberTwo === '' || numberThree === '') {
        alert('Necessário preencher todos os campos!');
        return;
    }

    let numeros = [];
    numeros.push(numberOne, numberTwo, numberThree);
    let resultado = numeros.sort((a, b) => a - b);
    alert(resultado);
    
}

// Fazer botão para reiniciar