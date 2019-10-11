function somar(){
    var n1 = document.getElementById ("primeiroNumero").value;
    var n2 = document.getElementById ("segundoNumero").value;
    var soma = parseInt (n1) + parseInt (n2);
    document.getElementById ("funcoes").innerHTML = soma;
}
function subtrair(){
    var n1 = document.getElementById ("primeiroNumero").value;
    var n2 = document.getElementById ("segundoNumero").value;
    var subtrair = parseInt (n1) - parseInt (n2);
    document.getElementById ("funcoes").innerHTML = subtrair;
}
function multiplicar(){
    var n1 = document.getElementById("primeiroNumero").value;
    var n2 = document.getElementById("segundoNumero").value;
    var multiplicar = parseInt (n1) * parseInt(n2);
    document.getElementById ("funcoes").innerHTML = multiplicar;
}
function dividir() {
    var n1= document.getElementById("primeiroNumero").value;
    var n2= document.getElementById("segundoNumero").value;
    var dividir = parseFloat(n1) / parseInt(n2);
    document.getElementById("funcoes").innerHTML = dividir; 
  }