const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

process.stdout.write('Digite um número: ');

rl.on('line', (input) => {
  // Converte a entrada do usuário para um número
  const numero = parseFloat(input);

  // Verifica se o número é positivo, negativo ou zero

  if (isNaN(numero)) { // ou seja se isNaN for true(se for letra, se nao for um numero) ele mostra essa mensagem abaixo
    process.stdout.write("Você digitou uma letra e nao um numero.\n");
  } else if (numero > 0) {
    process.stdout.write("O número é positivo.\n");
  } else if (numero < 0) {
    process.stdout.write("O número é negativo.\n");
  } else {
    process.stdout.write("O número é zero.\n");
  }

  rl.close();
});



/* isNaN() é uma função em JavaScript que verifica se o valor passado para ela não é um número ("Not-a-Number"). 
Ela retorna true se o valor não for um número e false se for um número.

Por exemplo:
isNaN(123); // Retorna false, pois 123 é um número
isNaN('abc'); // Retorna true, pois 'abc' não é um número
isNaN('123'); // Retorna false, pois '123' é uma string que pode ser convertida em número
isNaN(true); // Retorna false, pois true é interpretado como 1, que é um número
isNaN(false); // Retorna false, pois false é interpretado como 0, que é um número */