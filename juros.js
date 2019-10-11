//Captura os valores 
var captini = parseInt (prompt ("Informe a capital inicial: "));
var taxa = parseFloat (prompt ("Informe a taxa de juros: "));
var prazo = parseInt (prompt ("Informe o tempo de investimento: "));

//transformando a taxa em %
taxa = taxa/100;

var montante = captini * Math.pow((1 + taxa), prazo);

document.write("O montante é: ", montante, "<br><br>");
document.write ("Os juros totais são de: ", montante - captini);