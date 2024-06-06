try {
  // É executada quando não há erros.
  console.log(A); // ERRO
  console.log("Abri um arquivo.");
  console.log("Manipulei o arquivo e gerou erro.");
  console.log("Fechei o arquivo.");
} catch (error) {
  // É executada quando há erros
  console.log("Tratando o erro.");
} finally {
  // É sempre executado independente se há erros
  console.log("FINALLY: Eu sempre sou executado.");
}
