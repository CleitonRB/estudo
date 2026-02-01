let menu = '5'

do {

    menu = prompt(
        `Escolha a opção desejada: 
        \n1 - primeira
        \n2 - segunda
        \n3 - terceira
        \n4 - quarta
        \n5 - encerrar
        `
    )

    switch (menu) {
        case '1':
            alert('Opção 1 escolhida')
            break
        case '2':
            alert('Opção 2 escolhida')
            break
        case '3':
            alert('Opção 3 escolhida')
            break
        case '4':
            alert('Opção 4 escolhida')
            break
        case '5':
            alert('O sistema está sendo encerrado...')
            alert('Sistema encerrado!')
            break
        default:
            alert('opção invalida!')
    }

} while (menu !== '5')