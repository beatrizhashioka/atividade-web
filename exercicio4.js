//Multiplique a idade de todos usuários por dois e depois realize um filtro nos usuários que possuem no máximo 50 anos
const idade = require("./data.json");

//For Each 
idade.forEach(p => { p.age = p.age * 2; }
);
//Filtrar- se age*2 é menor ou igual 50
const pfiltrada = idade.filter(p => p.age <= 50 ? true : false)
//Mostrar no console
console.log(pfiltrada);