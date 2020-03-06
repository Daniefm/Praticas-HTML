//Declarando variaveis.
var num1 = parseFloat(prompt("Informe um número: "));
var num2 = parseFloat(prompt("Informe outro número: "));

//Diferenciando maior e menor número
       if(num1 > num2){
         
document.write("<div>Maior número digitado: " + num1
 + "<br><br>Raiz quadrada do maior número: " + Math.sqrt(num1)
 + "<br><br>Menor número digitado: " + num2
 + "<br><br>Menor número digitado elevado ao quadrado: " + Math.pow(num2, 2));
    
       } else{
       
document.write("Maior número digitado: " + num2
 + "<br><br>Raiz quadrada do maior número: " + Math.sqrt(num2)
 + "<br><br>Menor número digitado: " + num1
 + "<br><br>Menor número digitado elevado ao quadrado: " + Math.pow(num1, 2) + "</div>");
       }
  