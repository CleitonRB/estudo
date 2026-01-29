cadastrados = 0

do {
    let opcao = prompt("Cadastro de Imóveis\n" + 
        "\n Imóveis cadastrados: " + cadastrados + 
        "\n 1 - Salvar um imóvel" + "\n 2 - Mostrar todos os imóveis salvos" +
        "\n 3 - Sair"
    )

    switch (opcao) {
        case "1":
            let imovel = {}
            imovel.nomeProprietario = [prompt ("Nome do proprietario: ")]
            imovel.quartos = [prompt("Quantidade de quartos: ")]
            imovel.banheiros = [prompt("Quantidade de banheiros: ")]
            imovel.garagem = [prompt("Possui garagem? [S/N]")]

            cadastrados += 1
        break

        case "3":
            alert("Encerrando...")
        break
    }

} while (opcao !== 3)