let opcao = 0
let carteira = 0

do {
    opcao = Number(prompt(
        `
        Saldo Atual R$`+carteira+`
        \nEscolha a opção desejada: 
        \n1 - Adicionar
        \n2 - Remover
        \n3 - Sair
        `
    ))

    switch (opcao){
        case 1:
            let depositando = Number(prompt("Quanto quer adicionar a carteira? R$"))
            carteira += depositando
            break
        case 2:
            let sacando = Number(prompt("Quanto quer retirar da carteira? R$"))
            carteira -= sacando
            break
        case 3:
            alert("Saindo do sistema...")
            alert("Encerrado!")
            break
        default:
            alert('opção invalida!')
    }

} while (opcao !== 3)