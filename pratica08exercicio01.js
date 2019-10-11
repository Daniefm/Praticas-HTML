document.write("<div id='cabecalho'>Cabeçalho</div>");

document.write("<div id='menu'>Menu</div>");

document.write("<div id='foto'<a onclick='mensagem ()'>FOTO 01</button></div> ");
document.write("<div id='foto'<a onclick='mensagem ()'>FOTO 02</button></div> ");
document.write("<div id='foto'<a onclick='mensagem ()'>FOTO 03</button></div> ");
document.write("<div id='foto'<a onclick='mensagem ()'>FOTO 04</button></div> ");
document.write("<div id='foto'<a onclick='mensagem ()'>FOTO 05</button></div> ");
document.write("<div id='foto'<a onclick='mensagem ()'>FOTO 06</button></div> ");
document.write("<div id='foto'<a onclick='mensagem ()'>FOTO 07</button></div> ");
document.write("<div id='foto'<a onclick='mensagem ()'>FOTO 08</button></div> ");

document.write("<div id='rodape'>Rodapé</div>");


function mensagem() {
    if (cabecalho.innerHTML == "")
    cabecalho.innerHTML = "<span>Ok!</span>";
    else
    msg.innerHTML = "";
}
document.write("<div id='msg'></div>")