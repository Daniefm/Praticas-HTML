document.write("<table><thead ><th rowspan='1' class='topo'>Disciplina</th>       <th colspan='2'>Aluno</th>  <th>P1</th>    <th>P2</th>   <th>Total</th></thead>");   

                                                                  
document.write("<tbody><tr class='web'><td rowspan='6'class='disc'>Web</td><td colspan='2'<button onclick='acima()'>José da Silva</td>    <td>30</td>    <td>10</td>   <td>40</td></tr>");

document.write("<tr class='web'>                                          <td colspan='2'<button onclick='acima()'>Maria da Silva</td>    <td>25</td>    <td>7</td>    <td>32</td></tr>");
                                                                                                     
document.write("<tr class='web'>                                          <td colspan='2'<button onclick='abaixo()'>Ronildo Graves</td>    <td>12</td>    <td>3</td>    <td>15</td></tr>");
                                                                                                                                                                                                      
document.write("<tr class='web'>                                        <td colspan='2'<button onclick='abaixo ()'>Joselita Santos</td>    <td>15</td>    <td>8</td>    <td>23</td></tr>");

document.write("<tr class='web'>                                        <td colspan='5'>Média Web: 27,5</td></tr>");
                                                                                                     

document.write("<tbody><tr class='logica'><td rowspan='6'>Lógica de Programação</td><td colspan='2'<button onclick='abaixo ()'>José da Silva</td>    <td>20</td>     <td>09</td>   <td>29</td></tr>");
    
document.write("<tr class='logica'>                                                             <td colspan='2'<button onclick='acima ()'>Maria da Silva</td>    <td colspan='2'>  32 </td>   <td>32</td></tr>");

document.write("<tr class='logica'>                                                             <td colspan='2'<button onclick='abaixo ()'>Ronildo Graves</td>    <td>18</td>    <td>05</td>   <td>23</td></tr>");

document.write("<tr class='logica'>                                                             <td colspan='2'<button onclick='acima ()'>Ronildo Campos</td>    <td colspan='2'>  35 </td>   <td>35</td></tr>");

document.write("<tr class='logica'>                                                             <td colspan='2'<button onclick='acima ()'>Janaína Murtosa</td>    <td>30</td>    <td>10</td>  <td>40</td></tr>");

document.write("<tr class='logica'>                       <td colspan='5' class='media'>Média Lógica de Programação: 31,8</td></tr>");

             
function acima () {
    document.getElementById("aprovado").innerHTML = "<div id='verde'>Acima da Média</div>";
    
}

function abaixo () {
        document.getElementById("aprovado").innerHTML = "<div id='vermelho'>Abaixo da Média</div>";
}

document.write("<div id='aprovado'></div>");