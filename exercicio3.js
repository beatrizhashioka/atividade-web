// const { passageiros } = require("./data");
//Procurar determinado passageiro pelo nome 
//CODIGO MAIOR
// function procurandoNatan(passageiro) {
//     return passageiro.nome.toLowerCase() === "NATAN".toLowerCase();
// }
// const Natan = passageiros.find(procurandoNatan);
// console.table(Natan);

//Procurar determinado passageiro pelo nome 
//CODIGO MENOR
// const Natan = passageiros.find(passageiro => 
//  passageiro.nome.toLowerCase() === "NATAN".toLowerCase()
// );
// console.table(Natan);

const {address}  = require("./data.json");
// const moeron = moeron.find(moeron => 
//     moeron.address.toLowerCase() === "MOERON".toLowerCase()
//    );
//    console.table(moeron);
   let address = address.find(el => el.adress === "Moeron");
// => {name: "Albania", code: "AL"}
console.log(address["city"]);