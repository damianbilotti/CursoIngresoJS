/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
Mostar el resulto por medio de "ALERT"*/
function sumar()
{
    var primerNumero;
    var segundoNumero;
    primerNumero=parseInt(document.getElementById("numeroUno").value); 
    segundoNumero=parseInt(document.getElementById("numeroDos").value);
    primerNumero+segundoNumero;
    var resultado=primerNumero+segundoNumero;
    alert(resultado);

}

