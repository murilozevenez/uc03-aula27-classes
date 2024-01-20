const {Veiculo, Carro, Caminhao} = require('./Veiculo');


const carro = new Carro()



carro.marca = 'VW';
carro.modelo = 'Golf GTI';
carro.cor = 'Azul Royal';
carro.ano = '2022';
carro.alterar_peso(1200);


const caminhao = new Caminhao()

caminhao.zerar_tacografo()
caminhao.marca = 'Volvo'
caminhao.modelo = 'FH12 Globetrotter'
caminhao.cor = 'Laranja'
caminhao.ano = '2019'
console.log(carro)
console.log(caminhao)
console.log(caminhao instanceof Veiculo);
console.log(carro instanceof Veiculo);
