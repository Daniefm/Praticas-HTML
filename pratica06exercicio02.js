document.write("<div id='titulo'>Lista de Produtos</div>");
document.write("<ul id='lista'> <li> Leite</li>  \n  <li>Café</li>  \n  <li>Arroz</li></ul>");

document.write("<button onclick='listar() 'id='botao'>Listar Produtos</button>")
function listar () {
    var i, x = document.getElementsByTagName ("li");
    for (i = 0; i < x.length; i++)
    document.getElementById("resposta").innerHTML += x[i].innerHTML + " ";
}