function inverterArray(array) {
    let novo_array = []
    let tamanho_array = array.length - 1
    for (let i = 0; i < array.length; i++) {
        let valor = array[tamanho_array - i]
        novo_array.push(valor)
    }
    return novo_array;
}

module.exports = inverterArray;