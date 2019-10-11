function par (){
    var n1 = document.getElementById("primeiroNumero").value;
    if(n1 <= 0)
      alert("O numero deve ser maior que 0 !!!")
    var n2 = document.getElementById("segundoNumero").value;
    if (n2 <= n1)
      alert("O numero deve ser maior que o primeiro !!!")
    else{
        Math.min(n1, n2) == n1;
        var i = n1;
        do{
            if (i % 2 == 0)
            document.write(i + ", ");
            i++;
        } while (i <= n2)
        }  if (Math.min(n1, n2) == n2)
            var i = n2;
        do{
           if(i % 2 == 0){
           document.getElementById(i + ", ");
            i++;
                }
            }while (i <= n1)
            
        
    }
