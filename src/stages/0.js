const cardapio = require("../cardapio");
const banco = require("../banco");

function execute(user, msg, contato) {
  let menu = " SERVIÇOS \n\n";

  Object.keys(cardapio.menu).forEach((value) => {
    let element = cardapio.menu[value];
    menu += `${value} - ${element.descricao}        R$ ${element.preco} \n`;
  });

  banco.db[user].stage = 1;

  return [
    `Olá ${contato} sou *Cyber* uma assistente virtual, irei apresentar os nossos serviços, para fazer o pedido basta enviar o código do produto`,
    menu,
  ];
}

exports.execute = execute;
