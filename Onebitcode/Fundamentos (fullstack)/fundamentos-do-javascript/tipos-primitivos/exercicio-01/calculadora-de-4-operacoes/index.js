let x = parseFloat(prompt('Digite o primeiro valor: '))
let y = parseFloat(prompt('Digite o segundo valor: '))

let soma = x + y
let subtracao = x - y 
let multiplicacao = x * y
let divisao = x / y


console.log(
    'Resultados dos cauculos feitos com ', x ,' e ', y ,": ",
    'Soma = ', soma, 
    'Subtração = ', subtracao,
    'Multiplicação = ', multiplicacao,
    'Divisão = ', divisao
)

alert(
    'Resultados dos cauculos feitos com '+ x + ' e ' + y + ":" +
    '\nSoma = ' + soma + 
    '\nSubtração = ' + subtracao +
    '\nMultiplicação = ' + multiplicacao +
    '\nDivisão = ' + divisao 
)