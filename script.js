function somar(a, b) {
    return a + b; 
}

function divide(a, b) {
    return a/b;
}

function subtrai(a, b) {
    return a- b
}

function calcularSoma() {
    const num1 = parseInt(document.getElementById('num1').value);
    const num2 = parseInt(document.getElementById('num2').value);

    if(isNaN(num1) || isNaN(num2)) {
        document.getElementById('resultado').innerHTML = 'Insira Números válidos!';
    } else {
        const resultado = somar(num1, num2);
        document.getElementById('resultado').innerHTML = `Resultado da Soma: ${resultado}`;
    }
}

function calcularDividi() {
    const num1 = parseInt(document.getElementById('num1').value);
    const num2 = parseInt(document.getElementById('num2').value);

    if(isNaN(num1) || isNaN(num2)) {
        document.getElementById('resultado').innerHTML = 'Insira Números válidos!';
    } else {
        const resultado = divide(num1, num2);
        document.getElementById('resultado').innerHTML = `Resultado da Soma: ${resultado}`;
    }
}

function calcularSubtracao() {
    const num1 = parseInt(document.getElementById('num1').value);
    const num2 = parseInt(document.getElementById('num2').value);

    if(isNaN(num1) || isNaN(num2)) {
        document.getElementById('resultado').innerHTML = 'Insira Números válidos!';
    } else {
        const resultado = subtrai(num1, num2);
        document.getElementById('resultado').innerHTML = `Resultado da Soma: ${resultado}`;
    }
}

function multiplicar(a, b) {
    const resultado = a * b;
    document.getElementById('resultado').innerHTML = `Resultado da multiplicação: ${resultado}`;
}

function calcularMultiplica() {
    const num1 = parseInt(document.getElementById('num1').value);
    const num2 = parseInt(document.getElementById('num2').value);

    if(isNaN(num1) || isNaN(num2)) {
        document.getElementById('resultado').innerHTML = 'Insira Números válidos!';
    } else {
        multiplicar(num1, num2);
    }
}

function exibirMensagem() {
    document.getElementById('mensagem').innerHTML="Olá, essa é uma mensagem simples!";
}

function apagarMensagem() {
    document.getElementById('mensagem').innerHTML="....";
}

function enviarMensagem() {
    const texto = document.getElementById('texto');
    const paragrafo = document.getElementById('pTexto');

    paragrafo.style.display = "block";

    paragrafo.innerHTML = texto.value;
    texto.value = " ";
}

function mudarFundo() {
    const body = document.getElementById('body');
    body.style.background = "#B0C4DE";
}
