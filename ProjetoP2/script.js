function calcularPreco(){
    var cidadeDeRetirada = document.getElementById("cidadeRetirada").value;
    var cidadeDeEntrega = document.getElementById("cidadeEntrega").value;
    var tipoDoCarro = document.getElementById("tipoCarro").value;
    var dataDeRetirada = document.getElementById("dataRetirada").value;
    var dataDeEntrega = document.getElementById("dataEntrega").value;
    var diasLocados = 0;
    var precoTipoCarro = 0;
    var precoTotalAluguel = 0;
   
    if (tipoDoCarro == "basico"){
        precoTipoCarro = 119;
    }
        else if (tipoDoCarro == "ar"){
            precoTipoCarro = 199;
        }
                else 
                precoTipoCarro = "299";
                
    diasLocados = dataDeEntrega - dataDeRetirada;
    precoTotalAluguel = diasLocados * precoTipoCarro;
    if(cidadeDeEntrega !== cidadeDeRetirada){
        precoTotalAluguel +=300;
    }

    alert("O custo da locação é R$" + precoTotalAluguel+",00");
}