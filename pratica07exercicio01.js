document.write("<table><thead>  <th rowspan='1'class='tit'>  Nome do Aluno </th>   <th class='tit'>Nota P1</th>   <th class='tit'>Nota P2</th>    <th class='tit'>Nota T1</th>  <th class='tit'>Nota Total</th>   <th class='tit'>Faltas</th></thead>");

       //CORPO DE INFORMAÇOES             //NOME           //NOTAP1        //NOTAP2       //NOTAT1       //NOTATOTAL       //FALTAS         
document.write("<tbody><tr <button onclick='aprov ()'> <td class='nome'> Ana</td>      <td>29</td>    <td>17</td>     <td>27</td>     <td>73</td>    <td>0</td></tr>");                      

document.write("<tr <button onclick='reprov ()'>        <td class='nome'>Gisele</td>    <td>28</td>    <td>18</td>     <td>24</td>     <td>70</td>    <td>3</td></button></tr>");

document.write("<tr <button onclick='aprov ()'>        <td class='nome'>Jane</td>      <td>26</td>    <td>20</td>     <td>24</td>     <td>70</td>    <td>1</td></tr>");

document.write("<tr <button onclick='aprov ()'>        <td class='nome'>Jorge</td>     <td>25</td>    <td>19</td>     <td>29</td>     <td>73</td>    <td>0</td></tr>");

document.write("<tr <button onclick='aprov ()'>        <td class='nome'>Marina</td>    <td>30</td>    <td>16</td>     <td>27</td>     <td>73</td>    <td>1</td></tr></tbody>");


               //RODAPÉ                   //INFORMAÇOES ADICIONAIS                    //INFORMAÇOES ADICIONAIS
document.write("<tfoot><tr id='rodape1'><td class='nome'>Média</td>   <td>71,8</td>     </tr></tfoot></table>");
document.write("<div id='aprovado'></div>");

function aprov () {
    document.getElementById("aprovado").innerHTML = "<div id='verde'>Aprovado</div>";
    
}

function reprov () {
        document.getElementById("aprovado").innerHTML = "<div id='vermelho'>Reprovado</div>";
}
