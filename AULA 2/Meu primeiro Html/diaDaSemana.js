const readline = require('readline'); // Isso importa o módulo readline de Node.js, que é usado para ler entrada de usuário a partir do terminal.

/** Aqui, estamos criando uma interface readline, que especifica a entrada (process.stdin) e a saída (process.stdout).
 * Isso significa que o programa vai ler do terminal (entrada) e escrever no terminal (saída). */

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


/** Esta é a parte onde estamos pedindo ao usuário que insira um número de 1 a 7. 
 * A função rl.question() faz uma pergunta ao usuário e recebe uma resposta. 
 * O primeiro parâmetro é a pergunta que será exibida ao usuário, 
 * e o segundo é uma função de callback que será chamada com a resposta do usuário. */

rl.question('Digite um número de 1 a 7: ', (numeroDia) => {
  let nomeDia;

  switch (parseInt(numeroDia)) {
    case 1:
      nomeDia = "Domingo";
      break;
    case 2:
      nomeDia = "Segunda-feira";
      break;
    case 3:
      nomeDia = "Terça-feira";
      break;
    case 4:
      nomeDia = "Quarta-feira";
      break;
    case 5:
      nomeDia = "Quinta-feira";
      break;
    case 6:
      nomeDia = "Sexta-feira";
      break;
    case 7:
      nomeDia = "Sábado";
      break;
    default:
      nomeDia = "Número de dia inválido";
  }

  console.log("O dia correspondente é:", nomeDia);

  /** Depois que obtemos a resposta do usuário e terminamos de usar a interface readline,
   *  usamos rl.close() para fechar a interface e liberar os recursos. */
  rl.close();
});
