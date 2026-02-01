const nome = prompt(
    `
    Digite seu nome:
    `
)

let cidades = ""
let contagem = 0

let resposta = prompt(
    `
    Já visitou alguma cidade? [S/N]
    `
)

while (resposta === 's') {
    let cidade = prompt('Digite o nome da cidade: ')
    cidades += " - "+cidade+'\n'
    contagem++
    resposta = prompt('Você visitou mais alguma cidade? [S/N]')
}

alert(
    "Turista: "+nome+
    "\nQuantidade de cidades visitadas: "+contagem+
    "\nCidades visitadas:\n"+cidades 
    
)