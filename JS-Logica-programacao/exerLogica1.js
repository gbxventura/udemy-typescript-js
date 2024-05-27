// Escreva uma função que receba 2 números e retorne o maior deles
num1 = 4;
num2 = 10;

if (num1 > num2) console.log(`${num1} é maior que ${num2}`);
else return console.log(`${num2} é maior que ${num1}`);

// refactorado
const max = (x, y) => (x > y ? x : y);

console.log(max(10, 2));
