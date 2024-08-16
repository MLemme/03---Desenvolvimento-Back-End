//um arquivo esta requisitando outro
const c1 = require("./circuloF.js");
console.log(`Um círculo de raio 1 tem área ${c1.area(1)} `+
`e perímetro ${c1.perimetro(1)}`);

const Circulo = require("./circuloC.js");
const c2 = new Circulo(1);
console.log(`Um círculo de raio 1 tem área ${c2.farea()} `+
`e perímetro ${c2.fperimetro()}`);

