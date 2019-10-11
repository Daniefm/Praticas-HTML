document.write("<div class='info'>Cidade: <input name='cidade' type='text' size='50' maxlength='15' placeholder='informe o nome da primeira cidade.'><br></div>");
document.write("<div class='info'>Cidade: <input name='cidade' type='text' size='50' maxlength='15' placeholder='informe o nome da segunda cidade.'><br><br></div>");
document.write("<div class='botao'><button onclick='listar ()'>Listar Cidades</button></div>");
document.write("<p id='resposta'></p>");

function listar () {
     
    var i, vetor = document.getElementsByName ("cidade");
        for (i = 0; vetor.length; i++)
        document.getElementById ("resposta").innerHTML += "Valor: " + vetor[i].value + ", " + "Tag HTML: " + vetor[i].tagName + ", " + "Tamanho visível: " + vetor[i].size + ", " + "Número máximo de caracteres do string informado: " + vetor[i].maxLength + ", " + "Placeholder: " + vetor[i].placeholder + "<br>";
    }