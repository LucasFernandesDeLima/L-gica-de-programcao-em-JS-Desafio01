// Dados de entrada do usuário
// fist namber
// second number

// Variaveis da aplicação
// fistNamber (number)
// secondNumber (number)
// sum (number)
// subtraction (number)
// multiplication (number)
// division (number)
// restOfDivision (number)

// Tratamento de dados ou estrutura de dados
// if() para verificar se a soma dos dois números é par
// if() para verificar se os dois núemros são iguais

/*

1. Peço ao usuário para digitar o primeiro número.
2. O usuário digitar o número.
3. O número digitado é armazenado.


1. Peço ao usuário para digitar o segundo número.
2. O usuário digitar o número.
3. O número digitado é armazenado.

4. Realizar a soma dos dois núemros e armazenar o resultado da soma. 
5. Realizar a subtração dos dois núemros e armazenar o resultado da subtração. 
6. Realizar a multiplicação dos dois núemros e armazenar o resultado da multiplicação. 
7. Realizar a divisão dos dois núemros e armazenar o resultado da divisão.
8. calcular o resto da divisão dos dois números. 


 
*/

let fistNumber = Number(prompt('Digite o primeiro número'))
let secondNumber = Number(prompt('Digite o segundo número'))

let sum = fistNumber + secondNumber
let subtraction = fistNumber - secondNumber
let multiplication = fistNumber * secondNumber
let division = fistNumber / secondNumber
let restOfDivision = fistNumber % secondNumber

let sumIsEven = sum % 2 == 0
let inputNumbersAreEqual = fistNumber == secondNumber

let msgNumberOddEven
let msgEqualNumbers

sumIsEven
  ? (msgNumberOddEven = `A soma resulto em um núemro par que é o número: ${sum}`)
  : (msgNumberOddEven = `A soma resulto em um núemro impar que é o número: ${sum}`)
inputNumbersAreEqual
  ? (msgEqualNumbers = `Os números fornecidos pelo usuário são iguais: ${fistNumber} = ${secondNumber}`)
  : (msgEqualNumbers = `Os números fornecidos pelo usuário são diferentes: ${fistNumber} ≠ ${secondNumber}`)

alert(`
  ${msgEqualNumbers}

  ${msgNumberOddEven}
  Subtração: ${fistNumber} - ${secondNumber} = ${subtraction}
  Multiplicação: ${fistNumber} x ${secondNumber} = ${multiplication}
  Divisão: ${fistNumber} ÷ ${secondNumber} = ${division}
  Resto da divisão: ${fistNumber} % ${secondNumber} = ${restOfDivision}
  `)
