/* Operadores aritméticos

+ => Adição e Concatenação
- => Subtração
/ => Divisão
* => Multiplicação
** => Potencialização
% => Resto da divisão. 

Precedência dos operadores:

1° => ()
2° => **
3° => * / %
4° => + -
*/

const adicao = 5 + 5
const subtracao = 5 - 5
const divisao = 5 / 5
const multiplicacao = 5 * 5
const potencializacao = 5 ** 5
const restoDaDivisao = 5 % 5

const precedencia = ((5 + 5) - 4) * 8
const precedencia2 = ((5 + 5) - 4) + 10 ** 2
const precedencia3 = 5 + 5 % 2 / 3

console.log(`1° => ${adicao}`)
console.log(`2° => ${subtracao}`)
console.log(`3° => ${divisao}`)
console.log(`4° => ${divisao}`)
console.log(`5° => ${multiplicacao}`)
console.log(`6° => ${potencializacao}`)
console.log(`7° => ${restoDaDivisao}`)
console.log(`8° => ${precedencia}`)
console.log(`9° => ${precedencia2}`)
console.log(`10° => ${precedencia3}`)