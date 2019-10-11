document.write("<div id='cabecalho'>Centro Universitário UNA<img id='image'src='../_images/Una-01.png'></div><br>");


document.write("<div class='opcao'<button onclick='clique1 ()'>Unidade Betim</div><br>     <span id='c1'></span>");
document.write("<div class='opcao'<button onclick='clique2 ()'>Unidade Contagem</div><br>  <span id='c2'></span>");
document.write("<div class='opcao'<button onclick='clique3 ()'>Unidade Catalão</div><br>   <span id='c3'></span>");
document.write("<div class='opcao'<button onclick='clique4 ()'>Unidade Aimorés</div><br>   <span id='c4'></span>");

function clique1 () {
    if (c1.innerHTML == "")
    c1.innerHTML = "<div><h1>Áreas:</h1>  <p>Saúde e Biológicas</p>  <p>Tecnologia</p>  <p>Humanas</p></div>";
    else
    c1.innerHTML = "";
}
function clique2 () {
    if (c2.innerHTML == "")
    c2.innerHTML = "<div><h1>Áreas:</h1>  <p>Gestão</p>  <p>Gastronomia</p>  <p>Humanas</p></div>";
    else
    c2.innerHTML = "";
}
function clique3 () {
    if (c3.innerHTML == "")
    c3.innerHTML = "<div><h1>Áreas:</h1>  <p>Saúde e Biológicas</p>  <p>Aviação</p>  <p>Agronomia</p></div>";
    else
    c3.innerHTML = "";
}
function clique4 () {
    if (c4.innerHTML == "")
    c4.innerHTML = "<div><h1>Áreas:</h1>  <p>Comunicação</p>  <p>Tecnologia</p>  <p>Economia Criativa</p></div>";
    else
    c4.innerHTML = "";
}


document.write("<div id='rodape'>Estude no melhor Centro Universitário privado de Minas de acordo com o MEC.</div>");