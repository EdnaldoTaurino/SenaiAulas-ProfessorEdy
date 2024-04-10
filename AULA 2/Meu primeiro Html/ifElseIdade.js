// Definindo uma variável idade
process.stdout.write("Digite a sua idade: "); // Usamos process.stdout.write para exibir uma mensagem no console

process.stdin.on("data", function (data) {
  // Usamos process.stdin.on para ouvir a entrada do usuário
  const idade = parseInt(data.toString().trim());

  // Verificamos se a idade é maior ou igual a 18 dentro da função de callback do evento 'data'
  if (idade >= 18) {
    console.log("Você é maior de idade.");
  } else {
    console.log("Você é menor de idade.");
  }

  process.exit(); // Terminamos o processo após receber a entrada do usuário
});

/** const idade = parseInt(data.toString().trim());
 * Converte os dados de entrada do usuário em uma string.
 * Isso é necessário porque os dados de entrada são originalmente do tipo Buffer,
 * e queremos convertê-los em uma representação de texto legível. */
