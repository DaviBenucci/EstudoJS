/* São os tipos declarados como número sendo númericos, aonde mesmo que o número tenha valores decimais, na tipagem 
ele continua sendo number. Sem ter específicação de int opu float */

const number = 25
const number2 = 25
const number3 = 25.25

// contudo se um número for colocado entre "", '' ou `` ele será tratado como uma string

const number4 = "25"

console.log (typeof number, typeof number2, typeof number3, typeof number4)