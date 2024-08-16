//Aula 1.4.1
import { Circulo2 } from "./circuloC.js";
//package.json ->  "type": "module", abaixo de ISC

const c1 = new Circulo2(1);
console.log(`Um círculo de raio 1 tem área ${c1.area()} `+
`e perímetro ${c1.perimetro()}`);

import Calculadora from 'calculadora';
const c2 = new Calculadora();
console.log(c2.somar(1,2));