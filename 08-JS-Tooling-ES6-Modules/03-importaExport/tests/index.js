import soma from "./modulo1";
import * as moduloInteiro from "./modulo1";
import { nome } from "./modulo1";
import { sobrenome as alias } from ",/modulo1";
import { nome as alias2, sobrenome as alias3, idade } from "./modulo1";
import soma2, * as outroModulo from "./modulo1";

console.log(alias2, soma, moduloInteiro, nome, alias, alias3, idade);
console.log(soma2, outroModulo);
