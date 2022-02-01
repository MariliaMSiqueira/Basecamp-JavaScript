// MÉTODO FILTER()
// RETORNAR NÚMEROS PARES
// COM FUNCTION CALLBACK
function exemploFilter(arr) {
  return arr.filter(callback)
}

function callback(item) {
  return item % 2 === 0
}

const numsArr = [2, 4, 6, 7, 8, 11, 13, 15, 14]

console.log('Números pares', exemploFilter(numsArr))

// COM ARROW FUNCTION

function filterExemplo(arr) {
  return arr.filter(item => item % 2 === 0)
}

const arrNums = [2, 4, 6, 7, 8, 11, 13, 15, 14]

console.log('Números pares', filterExemplo(arrNums))

// NÚMEROS IMPARES, COM ARROW FUNCTION

function filtraImpares(arr) {
  return arr.filter(item => item % 2 !== 0)
}

const myArr = [2, 4, 6, 7, 8, 11, 13, 15, 14]

console.log('Números impares', filtraImpares(myArr))
