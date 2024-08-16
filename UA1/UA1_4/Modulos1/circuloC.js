//Criado através de classe
const{PI} = Math;
module.exports = class Circulo {
    constructor(raio) { this.raio = raio; }
    farea = () => PI * this.raio ** 2;
    fperimetro = () => 2 * PI * this.raio;
};