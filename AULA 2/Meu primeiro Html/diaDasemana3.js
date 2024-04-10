process.stdout.write('Digite o número do dia da semana (1 a 7): '); // usamos process.stdout.write para exibir uma mensagem no console, 

process.stdin.on('data', function(data) { // para ouvir a entrada do usuário. Quando o usuário insere dados e pressiona Enter,
    const numeroDia = parseInt(data.toString().trim());
    let nomeDia;

    /**const numeroDia = parseInt(data.toString().trim());: Aqui estamos processando a entrada do usuário. 
     * Primeiro, convertemos os dados de entrada para uma string usando data.toString(), 
     * porque os dados de entrada são originalmente do tipo Buffer. 
     * Em seguida, usamos trim() para remover quaisquer espaços em branco extras 
     * do início e do final da string. Por fim, usamos parseInt() para converter a string em um número inteiro. */

    switch (numeroDia) {
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
    process.exit(); // Termina o processo após receber a entrada do usuário
});
