const valor = prompt(
    `Digite o valor em metros(m):`
)

const escolha = prompt(
    `
    Escolha a opção para a qual deseja fazer a conversão:
    \n1 - milímetro (mm)
    \n2 - centímetro (cm)
    \n3 - decímetro (dm)
    \n4 - decâmetro (dam)
    \n5 - hectômetro (hm)
    \n6 - quilômetro (km)
    `
)

const escolhaNumerico = parseFloat(escolha)

switch (escolhaNumerico) {
    case 1:
        resultado = valor * 1000
        alert('O valor '+valor+'m é igual '+resultado+'mm')
        break 
    case 2:
        resultado = valor * 100
        alert('O valor '+valor+'m é igual '+resultado+'cm')
        break
    case 3:
        resultado = valor * 10
        alert('O valor '+valor+'m é igual '+resultado+'dm')
        break
    case 4:
        resultado = valor / 10
        alert('O valor '+valor+'m é igual '+resultado+'dam')
        break
    case 5:
        resultado = valor / 100
        alert('O valor '+valor+'m é igual '+resultado+'hm')
        break
    case 6:
        resultado = valor / 1000
        alert('O valor '+valor+'m é igual '+resultado+'km')
        break
    default:
        alert('Opção invalida!')

}