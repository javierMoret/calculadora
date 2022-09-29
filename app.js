
function calcular(){

    var n1 = parseFloat(document.getElementById("n1").value);
    var n2 = parseFloat(document.getElementById("n2").value);
    var radios = document.getElementsByName("operadores");
    for (var radio of radios)
    {
        if (radio.checked) {
            console.log(radio.value);
            var operadorSeleccionado = parseInt(radio.value);
        }
    }
    console.log(operadorSeleccionado);
    var resultado;

        switch(operadorSeleccionado){
            case 0:
                 resultado=n1+n2;
                 break;
            case 1:
                 resultado=n1-n2;
                 break;
            case 2:
                 resultado=n1*n2;
                 break;
            case 3:
                 resultado=n1/n2;
                 break;
            case 4:
                 resultado=n1%n2;
                 break;
            default:
                resultado="Sin operador"
        }
    document.getElementById("resultado").innerHTML=resultado;

}

function concatenarOperacion(){
    console.log(document.getElementById("resultado").innerHTML);
    document.getElementById("n1").value= document.getElementById("resultado").innerHTML;
    document.getElementById("resultado").value=0;
    document.getElementById("n2").value=0;
    
}