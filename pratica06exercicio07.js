document.write("<div class='botao'><h1 class='titulo'>Média Aritimética</h1><button id='but' onclick='media ()''>Calcular a Média dos Valores</button></div>")

var x = parseInt(prompt("Informe a quantidades de números para média:"));
var soma = parseFloat([]);
function media () {
    var i, vet = new Array (x);
        for (i = 0; i < vet.length; i++) {
            vet[i] = parseInt(prompt ("Informe um número: "))
        }
        for (i = 0; i < vet.length; i++) {
            document.write ("<div class='resul'>O " + (i+1) + "° valor informado = " + vet[i] + "</div><br/>");

        soma += vet[i]; 

        }

        document.write("<br/>"); 
        document.write(`<div class='resp'>A Média Aritimética dos ${x} valores é: ${parseFloat(soma)} </div>`);    
        }
