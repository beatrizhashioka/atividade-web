// 1. Crie uma variável que contenha todas as idades (age) dos usuário - map
const idade = require("./data.json");

//Mostrar a idade dos passageiros
// const novaIdade = idade.map(idade => `${idade.age}`);

const novaIdade = idade.map(idade => `${idade.first_name} tem idade: ${idade.age}`);
console.log(novaIdade);

