let palavra = prompt("Digite a palabra que deseja verificar se é um palíndromo:")
let palavraInvert = ""

for(let i = palavra.length - 1; i >= 0; i--){
    palavraInvert += palavra[i]
}

if (palavra === palavraInvert){
    alert(palavra+' é um palindromo!')
} else {
    alert(palavra+' Não é um palindromo!\n\n'+
        palavra+' != '+palavraInvert
    )
}