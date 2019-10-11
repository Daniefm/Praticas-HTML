//Declaração de váriaveis.
var i, n = parseInt (prompt("Informe um número:"));

var soma = 0;
//Fazendo a primeira sequencia de numeros e somando. 
       document.write("<div>Primeira sequencia de números: ");
             for(i = 3; i <= n; i += 3){
       document.write(i + ", ");
             soma = soma + i;
     } document.write("<br><br>A soma dos números são: " + soma);

//Segunda sequencia de numeros 
var soma = 0;
       document.write("<br><br>Segunda sequencia de números: ");
            for(i = 5; i <= n; i+=5){
       document.write(i + ", ");   
            soma = soma + i;   
     } document.write("<br><br>A soma dos números são: " + soma);

//Terceira sequencia de numeros
var soma = 0;
       document.write("<br><br>Terceira sequencia de números: ");
            for(i = 0; i <= n; i++){
       document.write(Math.pow(2, i) + ", ")
            soma = soma + Math.pow(2, i);
     } document.write("<br><br>A soma dos números são: " + soma);
//Quarta sequencia de numeros
var soma = 0;
       document.write("<br><br>Quarta sequencia de números: ");
            for(i = 1; i <= n; i++){
       document.write(Math.pow(i, 3) + ", ")
            soma = soma + Math.pow(i, 3);
     } document.write("<br><br>A soma dos números são: " + soma + "</div>");

