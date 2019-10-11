var x = parseInt(prompt("Informe a quantidades de números para média:"));

document.write("<h1 class='titulo'>Descubra o maior valor</h1>")



    var i, vet = new Array (x);
        for (i = 0; i < vet.length; i++) {
            vet[i] = (document.write("Informe um número:<input type='number' id='valores'><br>"))
        }
    
    document.write("<button onclick='armazenar ()' >Qual o maior?</button>")
    document.write("<button onclick='qual ()' >Qual o maior?</button>") 
     

    function armazenar (){
        vet.push(document.getElementById("valores").value);
        document.getElementById("numeros").innerHTML = "Os números informados são: "+ vet[i];
    }

    function qual () {
        var resp = Math.max.apply(Math, vet[i])
        document.getElementById("result").innerHTML = "O Maior valor informado é o = " + resp;
    }
    document.write("<div id='numeros'></div>");
    document.write("<div id='result'></div>");