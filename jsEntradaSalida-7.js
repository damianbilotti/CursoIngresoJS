/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var primernumero=parseInt(document.getElementById("numeroUno").value);
    var segundonumero=parseInt(document.getElementById("numeroDos").value);
    primernumero+segundonumero;
    var resultado=primernumero+segundonumero;
    alert ("la suma es "+resultado);
}

function restar()
{
    var primernumero=parseInt(document.getElementById("numeroUno").value);
    var segundonumero=parseInt(document.getElementById("numeroDos").value);
    primernumero-segundonumero;
    var resultado=primernumero-segundonumero;
    alert ("la resta es "+resultado);
	
}

function multiplicar()
{ 
	var primernumero=parseInt(document.getElementById("numeroUno").value);
    var segundonumero=parseInt(document.getElementById("numeroDos").value);
    primernumero*segundonumero;
    var resultado=primernumero*segundonumero;
    alert("la multiplicacion es "+resultado);
}

function dividir()
{
    var primernumero=parseInt(document.getElementById("numeroUno").value);
    var segundonumero=parseInt(document.getElementById("numeroDos").value);
    primernumero/segundonumero;
    var resultado=primernumero/segundonumero;
    alert ("la division es "+resultado);
	
}

