let name = "prop"
console.log(name)

let objeto = {}
console.log(objeto)

objeto.prop = "ola, mundo!"
console.log(objeto)

objeto.prop

objeto[name]

objeto.prop === objeto["prop"]

objeto.prop === objeto[name]

objeto.prop === objeto["pro" + "p"]

let funcao = "log"
console.log(funcao)

console[funcao]("Olá, Mundo!")

const pessoa = {}
pessoa.nome = "Isaac"
pessoa.idade = 26

console.log(pessoa)

pessoa.colegas = ["Lucas", "Juliana", "Rafael"]
pessoa.endereço = {
    rua: "Logo ali",
    numero: 42,
    bairro: "Centro"
}

console.log(pessoa)