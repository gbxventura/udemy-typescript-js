// new Object -> Object.prototype
const objA = {
  chaveA: "A",
  // __proto__: Object.prototype
};

const objB = {
  chaveA: "B",
};

const objC = new Object();
objC.chaveC = "C";

// O prototype do objeto B vai poder acessar o Objeto A,
// pois o B será pai do A
Object.setPrototypeOf(objB, objA);
Object.setPrototypeOf(objC, objB);
Object.getPrototypeOf(objA);
