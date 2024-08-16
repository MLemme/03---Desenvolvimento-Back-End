console.log("Alo Mundo");

// Definição de variáveis com let
let a = 5;
let b = "Apenas uma frase";
let c = true;

// Exemplos de operações aritméticas
let a2 = 5, b2 = 2;
let c2 = a2 / b2; // c vale 2.5
let d2 = a2 % b2; // d vale 1 (resto da divisão inteira)
a2 += b2; // a recebe o valor a + b
a2++; // a é incrementado de 1

// Exemplos de operações relacionais
let a3 = 5, b3 = 2;
let c3 = a3!= b3; // operador de diferença: c vale true
let d3 = a3 == b3; // operador de igualdade: d vale false
let e3 = a3 > b3; // operador maior que: e vale true
let f3 = a3 <= b3; // operador menor ou igual: f vale false

// Exemplos de operações lógicas
let a4 = 5, b4 = 2, c4 = 3;
let b14 = (a4 > b4) && (b4 > c4); // operador and: T && F -> false
let b24 = (a4 > b4) || (b4 > c4); // operador or: T || F -> true
let b34 =!b24; // operador not:!T -> false

let a5 = 5, b5 = 2, c5 = 3;
let maior;
if ((a5>b5)&&(a5>c5)) {
    console.log("A contém o maior valor");
    maior = a5;
} else if((b5>a5)&&(b5>c5)){
    console.log("B contém o maior valor");
    maior = b5;
} else {
    console.log("C contém o maior valor");
    maior = c5;
}

// Impressão dos valores de 1 a 10
for(let a = 1; a <= 10; a++){
    console.log(a);
}

//Tipos de funções
function somar_v1(a,b) {
    return a + b;
}
const somar_v2 = (a,b) => {
    return a + b;
}
const somar_v3 = (a,b) => a + b;

//Operação de vetores
let vetor1 = [1, 3, 5, 7]; // Vetor com os valores 1, 3, 5 e 7
let vetor2 = []; // Vetor vazio
let vetor3 = new Array(2, 4, 6); // Definição via classe Array
vetor2.push("ANA"); // Acréscimo de elemento no vetor

//Criação e operação com classes
class Pessoa{
    exibir = () => {
        console.log(`${this.nome}::${this.idade}`)
    }
    constructor (nome, idade){
        this.nome = nome;
        this.idade = idade;
    } 
}

let p = new Pessoa("Ana",25);
p.exibir();

//Slide aula 1.3.2
for (let i = 1; i <= 10; i++){
    console.log(`Valor de i: ${i}`);
    if (i % 2 == 0)
        console.log("\t Numero par");
    else
        console.log("\t Numero impar");
}

//Definição de funções: function e arrow function
//• Formato tradicional:
function somar_v4 ( a, b ) { return a + b; }
//• Formato novo:
let somar_v5 = ( a, b ) => { return a + b; }
let somar_v6 = ( a, b ) => a + b;

//Vetores na forma de lista
let avetor1 = [1, 3, 5, 7];
let avetor2 = [];
let avetor3 = new Array(2, 4, 6);
avetor2.push("ANA");
for(let a of avetor1) console.log(a);

//• Classes como funções
function aPessoa(nome, idade)
{ this.nome = nome; this.idade = idade; }
//• Classes no formato novo
class aoPessoa{
    constructor(nome, idade){
    this.nome = nome; this.idade = idade;
}
}