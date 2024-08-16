const{PI} = Math;
export class Circulo2 {
    constructor(raio) { this.raio = raio; }
    area = () => PI * this.raio ** 2;
    perimetro = () => 2 * PI * this.raio;
};