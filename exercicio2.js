// 2. Crie uma variáveis que tenha apenas os usuários do sexo feminino e com mais de 18 anos - reduce
const idade = require("./data.json");

const idadeFiltrada = idade.filter(idade => {
    return idade.age > 18 && idade.gender == "Female" ? true : false

}
);
//Mostrar no Console
console.log(idadeFiltrada);

