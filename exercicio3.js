//Crie uma variável que procura por um usuário que more na cidade chamada Monroe - find
const cidade = require("./data.json");
const Monroe = cidade.find(function (p) {
    return p.address.city == "Monroe"

}
);
//Mostrar no console
console.log(Monroe);