const soma = require('./utils/soma.js');
const multiplicacao = require('./utils/multiplicacao.js');
const divisao  = require('./utils/divisao.js');
const subtracao = require('./utils/subtracao.js');

const prompt = require('prompt-sync')();

let ligaDesliga = true;
while (ligaDesliga) {
    console.log("1 - Soma, 2 - Multiplicação, 3 - Divisão, 4 - Subtração, 5 - Encerrar programa")
    let operador = prompt("Escolha a opção: ")
    switch(parseInt(operador)) {
        case 1:
            console.log("Operação de Soma.");
            let aSoma = parseFloat(prompt('Digite o primeiro valor: '))
            let bSoma = parseFloat(prompt('Digite o segundo valor: '))
            const resultadoSoma = soma(aSoma, bSoma);
            console.log(`Resultado = ${resultadoSoma}`);
            break;
        case 2:
            console.log("Operação de Multiplicação");
            let aMultiplicacao = parseFloat(prompt('Digite o primeiro valor: '))
            let bMultiplicacao = parseFloat(prompt('Digite o segundo valor: '))
            const resultadoMultiplicacao = multiplicacao(aMultiplicacao, bMultiplicacao);
            console.log(`Resultado = ${resultadoMultiplicacao}`);
            break;
        case 3:
            console.log("Operação de Divisão.");
            let aDivisao = parseFloat(prompt('Digite o primeiro valor: '))
            let bDivisao = parseFloat(prompt('Digite o segundo valor: '))
            const resultadoDivisao = divisao(aDivisao, bDivisao);
            console.log(`Resultado = ${resultadoDivisao}`);
            break;
        case 4:
            console.log("Operação de Subtração.");
            let aSubtracao = parseFloat(prompt('Digite o primeiro valor: '))
            let bSubtracao = parseFloat(prompt('Digite o segundo valor: '))
            const resultadoSubtracao = subtracao(aSubtracao, bSubtracao);
            console.log(`Resultado = ${resultadoSubtracao}`);
            break;
        case 5:
            console.log("Calculadora desligada.");
            ligaDesliga = false
    }
}