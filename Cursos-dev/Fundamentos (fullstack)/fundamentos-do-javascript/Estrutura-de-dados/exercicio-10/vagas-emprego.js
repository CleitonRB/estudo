const vagas = []

function listarVagas() {
    const vagasTexto = vagas.reduce(function(textoFinal, vaga, indice){
        textoFinal += indice + ". "
        textoFinal += vaga.nome
        textoFinal += " (" + vaga.candidatos.length + " candidatos)\n"
        return textoFinal
    }, "")
    alert(vagasTexto)
} 

function novaVaga() {
    const nome = prompt("Informe um nome para vaga: ")
    const descricao = prompt("Informe uma descrição para a vaga: ")
    const dataLimite = prompt("Informe uma data limite (dd/mm/aaaa) para a vaga: ")

    const confirmacao = confirm(
        "Deseja criar uma nova vaga com essas informações?\n" +
        "Nome: " + nome + "\nDescrição: " + descricao + "\nData Limite: " + dataLimite
    )

    if (confirmacao) {
        const novaVaga = {nome, descricao, dataLimite, candidatos: []}
        vagas.push(novaVaga)
        alert("Vaga Criada!")
    }
}

function exibirVaga() {
    const indice = prompt("Informe o indice da vaga que deseja exibir: ")
    const vaga = vagas[indice]

    const candidatosTexto = vaga.candidatos.reduce(function(textoFinal, cadidato){
        return textoFinal + "\n - " + cadidato
    }, "")

    alert(
        "Vaga nº " + indice + 
        "\nNome: " + vaga.nome + 
        "\nDescrição: " + vaga.descricao + 
        "\nData Limite: " + vaga.dataLimite +
        "\nQuantidade de candidatos: " + vaga.candidatos.length +
        "\nCandidatos inscritos: " + candidatosTexto
    )
}

function inscreverCandidato() {
    const candidato = prompt("Informe o nome do(a) candidato(a): ")
    const indice = prompt("Informe o indice da vaga para a qual o(a) candidato(a) deseja se inscrever: ")
    const vaga = vagas.indice

    const confirmacao = confirm(
        "Deseja inscrever o(a) candidato(a) " + candidato + " na vaga " + indice + "?\n" + 
        "Nome: " + vaga.nome + "\nDescrição: " + vaga.descricao + "\nData limite: " + vaga.dataLimite
    ) 

    if (confirmacao) {
        vaga.candidatos.push(candidato)
        alert("Incrição realizada!")
    }
}
