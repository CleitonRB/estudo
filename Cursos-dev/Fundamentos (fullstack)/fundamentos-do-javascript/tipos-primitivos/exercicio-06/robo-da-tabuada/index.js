let num = prompt(
    `
    Digite o número da tabuada que deseja verificar: 
    `
)

for (let i = 0; i <= 20; i++) {
    let resultado = num * i
    console.log(num+' X '+i+' = '+resultado)
}