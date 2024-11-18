alert("Bem vindo ao jogo de adivinhação do número secreto!");

let numeroSecreto = Math.floor(Math.random() * 100) + 1;
let tentativasAdivinharNumero = 1;
let contadorTentativas =
  tentativasAdivinharNumero > 1 ? "tentativas" : "tentativa";

let chute = prompt("Digite um número para tentar adivinhar o número secreto!");

while (chute != numeroSecreto) {
  chute = prompt("Digite um número para tentar adivinhar o número secreto!");
  if (chute == numeroSecreto) {
    alert(
      "Parabéns! Você acertou o número secreto em " +
        tentativasAdivinharNumero +
        " " +
        contadorTentativas +
        "!"
    );
    break;
  }
  if (chute < numeroSecreto) {
    alert("O número secreto é maior que " + chute);
  } else if (chute > numeroSecreto) {
    alert("O número secreto é menor que " + chute);
  }
  tentativasAdivinharNumero++;
}

alert(
  "Parabéns! Você acertou o número secreto em " +
    tentativasAdivinharNumero +
    " " +
    contadorTentativas +
    "!"
);
