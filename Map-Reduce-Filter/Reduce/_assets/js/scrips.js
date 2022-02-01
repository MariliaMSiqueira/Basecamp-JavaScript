// MÉTODO REDUCE
// 1° ATIVIDADE : SOMA DOS NÚMEROS DE UM ARRAY
// PREV = PRIMEIRO NÚMERO DO ARR
// CURRENT = SEGUNDO NÚMERO DO ARR

function exemploReduceSoma(arr) {
  return arr.reduce(function (prev, current) {
    console.log({ prev })
    console.log({ current })
    return prev + current
  })
}

const arrNums = [1, 2] /* RETURN 9 */

console.log(
  'Primeiro exemplo, sem valor inicial. Resultado final é: ',
  exemploReduceSoma(arrNums)
)

// PREVIOUS = ACUMULADOR
// VALOR INICIAL É O NÚMERO 2
// PREV ASSUME O 2
// RESULTADO 2 + 3 = 5 = PRÓXIMO PREV (ACUMULADOR DE RESULTADO)
// CURRENT ASSUME O PRÓXIMO NÚMERO DO ARRAY, PORTANTO, 5 + 4 = 9 = RESULTADO FINAL

function reduceExemploSoma(arr) {
  return arr.reduce(function (prev, current) {
    console.log({ prev })
    console.log({ current })
    return prev + current
  }, 2)
}

const array = [3, 4]
console.log(
  'Segundo exemplo, com número inicial. Resultado final é ',
  reduceExemploSoma(array)
)

// 2° ATIVIDADE : CRIE UMA FUNÇÃO QUE RECE UMA LISTA DE PREÇOS E UM NÚMERO REPRESENTANDO O SALDO DISPONÍVEL. CALCULE QUAL SERÁ O SALDO FINAL APÓS SUBTRAIR TODOS OS PREÇOS DA LISTA ENVIADA.
// ESTRUTURA
function subPrices(arr) {
  return arr.reduce(function (prev, current) {
    return prev - current
  }, 100)
}

const arrPrices = [10, 20, 30]

console.log(
  'Subtraindo todos os valores, o saldo disponível será de R$',
  subPrices(arrPrices)
)

// ITERAÇÃO COM LISTA DE OBJETOS E SEUS ATRIBUTOS

const productList = [
  {
    name: 'Teclado',
    price: 129
  },
  {
    name: 'Mouse',
    price: 34
  },
  {
    name: 'Headset',
    price: 139
  },
  {
    name: 'Cooler',
    price: 59
  }
]

const saldoDisponivel = 500

function calculaSaldo(saldoDisponivel, productList) {
  return productList.reduce(function (prev, current, index) {
    // Callback function
    console.log('Rodada =>', index + 1) // index + 1 pois o index do array começa em 0
    console.log({ prev })
    console.log({ current })
    return prev - current.price // Acessar o preço do objeto
  }, saldoDisponivel) // Inicializador
}

console.log(
  'Após a compra ser efetuada, o saldo disponível será de R$',
  calculaSaldo(saldoDisponivel, productList)
)
