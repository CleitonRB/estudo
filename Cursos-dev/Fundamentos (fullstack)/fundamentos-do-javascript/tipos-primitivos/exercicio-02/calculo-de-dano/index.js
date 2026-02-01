const personagem1 = prompt('Digite o nome do personagem: ')
let poderAtaque = parseInt(prompt('Digite o poder de ataque do personagem: '))

const personagem2 = prompt('Digite o nome do segundo personagem: ')
let pontosVida = parseInt(prompt('Digite a quantidade de pontos de vida do segundo personagem: '))
let poderDefesa = parseInt(prompt('Digite o poder de defesa do segundo personagem: '))
const temEscudo = prompt('Informe se o personagem tem escudo [S = sim /N = não]').toLowerCase()

let danoCausado = 0

if ((poderAtaque > poderDefesa) && (temEscudo === 'n')) {
    danoCausado = poderAtaque - poderDefesa
} else if ((poderAtaque > poderDefesa) && (temEscudo === 's')) {
    danoCausado = (poderAtaque - poderDefesa)/2
} else if (poderAtaque <= poderDefesa) {
    danoCausado = 0
}

let pontosVidaRestante = pontosVida - danoCausado

alert(
    ` Resultado do Combate
    ---------------------------------
    ${personagem1}
    Ataque = ${poderAtaque}
    ---------------------------------
    ${personagem2}
    Vida = ${pontosVida}
    Defesa = ${poderDefesa}
    Escudo = ${temEscudo==='s'?'sim':'não'}
    ---------------------------------
    Dano Causado = ${danoCausado}
    Vida do ${personagem2} = ${pontosVidaRestante}`
)