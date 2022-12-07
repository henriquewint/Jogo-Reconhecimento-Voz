function verificaValorValido(chute) {
    const numero = +chute;

    if(chuteInvalido(numero)) {
        elementoChute.innerHTML += '<div>Valor inválido</div>';
        return;
    }

    if(validaNúmero(numero)) {
        elementoChute.innerHTML += `<div>Valor inválido, o número precisa ser maior que ${menorValor} e menor que ${maiorValor}</div>`;
        return;
    }

    if(numero === numeroSecreto) {
        document.body.innerHTML = `
            <h2>Você acertou!</h2>
            <h3>O número secreto era ${numeroSecreto}</h3>
            <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>
        `
    } else if (numero > numeroSecreto) {
        elementoChute.innerHTML += `
        <div>O número secreto é menor</div>
        `
    } else {
        elementoChute.innerHTML += `
        <div>O número secreto é maior</div>
        `
    }
}

function chuteInvalido(numero) {
    return Number.isNaN(numero)
}

function validaNúmero(numero) {
    return numero > maiorValor || numero < menorValor;
}

document.body.addEventListener('click', e => {
    if(e.target.id == 'jogar-novamente') {
        window.location.reload();
    }
})