const carro1 = prompt('insira o nome do primeiro carro: ')
const velCar1 = prompt('insira a velocidade do primeiro carro: [km/h]')
const carro2 = prompt('insira o nome do segundo carro: ')
const velCar2 = prompt('insira a velocidade do segundo carro: [km/h]')

if (velCar1 == velCar2) {
    alert('Os dois carros tem a mesma velocidade!')
} else if (velCar1 > velCar2){
    alert(carro1+' é mais rápido!'+ velCar1,'Km/h')
} else {
    alert(carro2+' é mais rápido!'+ velCar2,'Km/h')
}

