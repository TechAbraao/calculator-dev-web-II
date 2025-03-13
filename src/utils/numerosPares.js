function gerarNumerosPares(N) {
    let numerosPares = [];
    for (let i = 1; i <= N; i++) {
        numerosPares.push(i * 2);
    }
    console.log(numerosPares);
}

module.exports = gerarNumerosPares;