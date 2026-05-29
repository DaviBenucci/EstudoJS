/*Operador de incremento "++", o operador de incremento pode ser tanto utilizado pós ou pré a varíavel ao qual ele está sendo utilizado,
Não se é possível utilizar o operador de incremento em uma const pois uma constante não pode ter o seu valor modificado */

let valor = 1

// no pré incremento ele faz a conta primeiro e depois realiza o que se pede na varíavel,
//já no pós ele realize primeiro o que se pede na varíavel e depois ele faz a conta.

console.log(valor++)
console.log(valor)
console.log(++valor)

//Já o operador de decremento se é utilizado com o sinal de "--" aonde ele pode serguir a mesma regra do anterior.

console.log(valor--)
console.log(valor)
console.log(--valor)

//Contudo esse incremento e decremento funciona somente de 1 em 1 se quisermos outros valores podemos fazer:

let passo = 4
let contar = 12
contar += passo // valor = valor + passo
console.log(contar)
contar += passo
console.log(contar)