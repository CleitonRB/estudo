let cadastrados = 0
let opcao = ""
let imoveis = []

do {

    opcao = prompt("Cadastro de Imóveis\n" + 
        "\n Imóveis cadastrados: " + cadastrados + 
        "\n 1 - Salvar um imóvel" + 
        "\n 2 - Mostrar todos os imóveis salvos" +
        "\n 3 - Sair"
    )

    switch (opcao) {
        case "1":
            let imovel = {}
            imovel.nomeProprietario = prompt ("Nome do proprietario: ")
            imovel.quartos = prompt("Quantidade de quartos: ")
            imovel.banheiros = prompt("Quantidade de banheiros: ")

            let garagemResposta = prompt("Possui garagem? [S/N]").toUpperCase()

                if (garagemResposta === "S") {
                    imovel.garagem = "Sim"
                } else if (garagemResposta === "N") {
                    imovel.garagem = "Não"
                } else {
                    imovel.garagem = "Não informado!"
                }

            imoveis.push(imovel)
            cadastrados += 1
        break

        case "2":
            if(imoveis.length === 0) {
                alert("Nenhum imóvel cadastrado!")
            } else {
                let mensagem = "imóveis cadastrados:\n"

                for (let i = 0; i < imoveis.length; i++) {
                    mensagem += 
                        "\nImóvel " + (i + 1) +
                        "\nProprietário: " + imoveis[i].nomeProprietario +
                        "\nQuartos: " + imoveis[i].quartos +
                        "\nBanheiro: " + imoveis[i].banheiros + 
                        "\nGaragem: " + imoveis[i].garagem + 
                        "\n-----------------------------------------"
                }

                alert(mensagem)
            }
        break

        case "3":
            alert("Encerrando...")
        break

        default:
            alert("Opção invalida!")
    }

} while (opcao !== "3")