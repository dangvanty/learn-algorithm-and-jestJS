const prompt = require('prompt-sync')()
let a = 8
let b = 9

const operation = prompt('nhập biểu thức ')
// theo kiểu swith case 
// c1
switch (operation) {
  case '*':
    console.log(`${a} ${operation} ${b} = ${a*b}`)
    break;
  case '/':
    console.log(`${a} ${operation} ${b} = ${a/b}`)
    break;
  case '+':
    console.log(`${a} ${operation} ${b} = ${a+b}`)
    break;
  default:
    break;
}
// c2
const condition = {
  "*":a*b,
  "/":a/b,
  "+":a+b
}
console.log(`${a} ${operation} ${b} = ${condition[operation]}`)