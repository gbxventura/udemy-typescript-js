const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000];

// ... rest operator, spread operator
// const [um, dois, tres, quatro, cinco, seis, ...resto] = numeros;
const [um, , tres, , cinco, , ...resto] = numeros;
console.log(um, tres, cinco);
console.log(resto);
