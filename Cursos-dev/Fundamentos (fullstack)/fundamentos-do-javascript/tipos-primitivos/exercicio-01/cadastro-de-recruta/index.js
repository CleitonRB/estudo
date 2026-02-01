let nome = prompt('Digite seu nome: ')
let sobrenome = prompt("Digite seu sobrenome: ")
let campoDeEstudo = prompt('Digite sua area de estudo: ')
let anoNasc = prompt('Digite seu ano de nascimento')

idade = 2025 - anoNasc

console.log(
    "Nome Completo: ",nome," ",sobrenome, 
    "\nCampo de Estudo: ",campoDeEstudo, 
    "\nIdade:",idade
)

alert(
    "Nome Completo: " + nome + " " + sobrenome +
    "\nCampo de Estudo: " + campoDeEstudo +
    "\nIdade: " + idade 
)




