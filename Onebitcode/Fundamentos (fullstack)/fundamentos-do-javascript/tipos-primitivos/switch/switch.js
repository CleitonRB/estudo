const resultado = prompt(
    `Escolha uma alternativa:
    \na) 1
    \nb) 2
    \nc) 3`
)

const resultadoNumerico = parseFloat(resultado)

switch(resultadoNumerico) {
    case 1:
        alert('O resultado é "A"')
        break
    case 2:
        alert('O resultado é "B"')
        break
    case 3:
        alert('O resultado é "C"')
        break
    default:
        alert('Finalizando!')
}