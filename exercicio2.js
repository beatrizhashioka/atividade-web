// 2. Crie uma variáveis que tenha apenas os usuários do sexo feminino e com mais de 18 anos - reduce
const gender = require("./data1.js");
const age = require("./data1.js");
const genderFiltro = gender.filter(genderFiltro => genderFiltro=="Female"? true : false)
console.log(genderFiltro);
const ageFiltro = age.filter(ageFiltro => ageFiltro>18? true : false)
console.log(ageFiltro);
//2- Filtrar listaDeEmail por email @ifms.edu.br
// const {listaDeEmails} = require ("./data");
// const emailFiltrados = listaDeEmails.filter(emailFiltrados =>  emailFiltrados.includes("@ifms.edu.br"));
// console.table(emailFiltrados);