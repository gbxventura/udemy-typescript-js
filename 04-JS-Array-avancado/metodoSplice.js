//
//
//                -5     -4        -3         -2        -1
//                0       1         2          3         4
const nomes = ["Maria", "João", "Eduardo", "Gabriel", "Julia"];

// array.splice(indiceInicial, qntsElementosRemover, addElem1, addElem1,addElem1);

//adicionando, sem remover.
nomes.splice(5, 0, "Roberto", "Roberta");
console.log(nomes);

//removendo, sem adicionar.
const removidos = nomes.splice(5, 2);
console.log(nomes, removidos);
