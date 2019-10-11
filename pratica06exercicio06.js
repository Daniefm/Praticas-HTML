document.write("<div class='info'>Informe a Temperatura em Fahrenheit (F°): <input id='tempF' type='number'/></div> ")

//BOTÃO DA FUNÇÃO

document.write("<div class='botao'><button id='but' onclick='converter ()''>CONVERTER</button></div>")

function converter () {
    var n1 = document.getElementById ("tempF").value;
    var celsius = (5 / 9) * (n1 - 32)
    document.getElementById ("resposta").innerHTML = Math.round(celsius);
}
document.write("<div class='resp'>Valor em graus Celsius = <span id='resposta'></span>°C</div>");