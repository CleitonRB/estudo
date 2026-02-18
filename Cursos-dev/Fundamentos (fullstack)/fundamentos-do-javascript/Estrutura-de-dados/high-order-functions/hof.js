function calc(a, b, operacao) {
    console.log("Realizando uma operação...")
    const result = operacao(a, b)
    return result
}

function somar(x, y) {
    console.log("Realizando uma soma...")
    return x + y
}

console.log(calc(3, 5, somar))

console.log(calc(8, 4, function (x, y) {
    console.log("Realizando uma subtração...")
    return x - y
}))

function exibirElemento(elemento, indice, array) {
    console.log({
        elemento,
        indice,
        array
    })
}

const lista = ["Maça", "Banana", "Laranja", "Limão"]

for (let i = 0; i < lista.length; i++) {
    exibirElemento(lista[i], i, lista)
}

lista.forEach(exibirElemento)

lista.forEach(function (elemento, indice, array){
    console.log({
        elemento,
        indice,
        array
    })
})