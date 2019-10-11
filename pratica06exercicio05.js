document.write("<div class='titulo'><h1>Função Desconto de 10%: </h1></div> ")


document.write("<div class='info'>Informe um número: <input id='num1' type='number'/></div> ")
document.write("<div class='info'>Informe um número: <input id='num2' type='number'/></div> ")
document.write("<div class='info'>Informe um número: <input id='num3' type='number'/></div> ")
document.write("<div class='info'>Informe um número: <input id='num4' type='number'/></div> ")
document.write("<div class='info'>Informe um número: <input id='num5' type='number'/></div> ")
document.write("<div class='botao'><button id='but' onclick='minhaFuncao ()''>Calcular 10% de desconto!</button></div>")

function minhaFuncao () {
    var i, vet = new Array ();
    vet[1] = document.getElementById ("num1").value * (0.9) ;
    vet[2] = document.getElementById ("num2").value * (0.9) ;;
    vet[3] = document.getElementById ("num3").value * (0.9) ;;
    vet[4] = document.getElementById ("num4").value * (0.9) ;;
    vet[5] = document.getElementById ("num5").value * (0.9) ;;
    for (i = 1; i < vet.length; i++) {
    document.getElementById ("resp").innerHTML += "Valor " + i + "  = " + vet[i] + "<br/>";
    }
    document.getElementById ("resp").innerHTML += "<br/><br/>";
}

document.write("<div id='resp'></div>");