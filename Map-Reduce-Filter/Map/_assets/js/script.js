// Método MAP
// Com e Sem a utilização do constructor this(objeto pré definido)
// Arrow Function
// Iteração com todos os elementos do array sem realizar laços de repetição.
// Código mais limpo, de fácil manutenibilidade e entendimento
// Locação de outro campo de memória(array auxiliar) para guardar o retorno do método pois o array original não é modificado

//  COM THIS, SEM ARROW FUNCTION.

const myPet = {
  values: 2
}

const myHouse = {
  values: 3
}

const myCar = {
  values: 5
}

function exemploMapThis(array, thisArgs) {
  return array.map(function (item) {
    return item * this.values
  }, thisArgs)
}

const enumsArray = [2, 4, 6]

console.log(
  'Retorno do this com myCar Object ',
  exemploMapThis(enumsArray, myCar)
)

console.log(
  'Retorno do this com myPet Object ',
  exemploMapThis(enumsArray, myPet)
)

console.log(
  'Retorno do this com myHouse Object ',
  exemploMapThis(enumsArray, myHouse)
)

// COM ''THIS'', COM ARROW FUNCTION - NÃO TEM O THIS POR TER A SINTAXE MAIS SIMPLIFICADA SÃO MELHORES APLICADAS EM FUNCTIONS QUE NÃO SÃO MÉTODOS, NÃO SÃO USADAS COMO CONSTRUCTOR

const myXbox = {
  value: 2
}
const arrayNums = [2, 4]

function exemploMapThisArrow(arr, thisArgs) {
  return arr.map(item => thisArgs.value * item)
}

console.log(
  'Retorno do this com myXbox Object',
  exemploMapThisArrow(arrayNums, myXbox)
)

// SEM THIS, COM ARROW FUNCTION.

const myOriginalArray = [23, 43, 16, 52, 55, 28, 100]
let myResultArray = []
myResultArray = myOriginalArray.map(item => item * 10)
console.log(myOriginalArray, myResultArray)

// SEM THIS, SEM ARROW FUNCTION.

function exemploMapSemThis(arr) {
  return arr.map(function (item) {
    return item * 10
  })
}

const numsArray = [3, 5, 7, 9]

console.log(
  'Retorno do método map sem objeto definido',
  exemploMapSemThis(numsArray),
  'Sem alteração do array original',
  numsArray
)
