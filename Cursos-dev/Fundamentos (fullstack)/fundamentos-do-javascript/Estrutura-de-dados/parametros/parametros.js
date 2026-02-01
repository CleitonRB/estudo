function dobro(x) {
    alert("O dobro de "+ x +" é " + (x*2))
}

//dobro(5)
//dobro(7)

//dobro()

function dizerOla(name = "mundo") {
    alert("Olá, " + name + "!")
}

//dizerOla("Cleiton")
//dizerOla()

function soma(a, b) {
    alert("Resultado da soma é " + (a + b))
}

//soma(7, 6)
//soma(1, 1)

function criarUsuario(nome, email, senha, tipo = "admin") {
    const usuario = {
        nome, // => nome: nome,
        email, // => email: email,
        senha, // => senha: senha,
        tipo // => tipo: tipo
    }

    console.log(usuario)
}

function novoUsuario(nome,  tipo = "admin", email, senha) {
    const usuario = {
        nome,
        email,
        senha,
        tipo
    }

    console.log(usuario)
}

//criarUsuario("Cleiton", "cleiton@email.com", "1234")
//novoUsuario("Cleiton", "admin", "cleiton@email.com", "1234")

function muitosParamentros(nome, telefone, endereco, aniversario, email, senha) {
    //...
}

function objetoComoParametro(usuario) {
    usuario.nome
    usuario.telefone
    usuario.endereco
    usuario.aniversario
    usuario.email
    usuario.senha
}

muitosParamentros("nome", "telefone", "endereco", "aniversario", "email", "senha")

const dadosUsuario = {
    nome: "",
    telefone: "",
    endereco: "",
    aniversario: "",
    email: "",
    senha: ""
}

objetoComoParametro(dadosUsuario)