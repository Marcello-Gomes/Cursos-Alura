function calcularImc(peso, altura) {
    return peso / (altura * altura);
}

let imcMarcello = calcularImc(106, 1.77);
let imcAmigo = calcularImc(68, 1.72);
let totalImc = imcMarcello + imcAmigo;

console.log ("A soma dos imc's é: " + totalImc);