process.stdout.write("Digite a sua idade: ");

process.stdin.on("data", function (data) {
  const idade = parseInt(data);

  if (!isNaN(idade)) {
    // Verifica se a entrada é um número
    if (idade >= 18) {
      console.log("Você é maior de idade.");
    } else {
      console.log("Você é menor de idade.");
    }
  } else {
    console.log("Entrada inválida. Por favor, digite um número.");
  }

  process.exit();
});
