/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	var numerouno=parseInt(document.getElementById("numeroDividendo").value);
    var numerodos=parseInt(document.getElementById("numeroDivisor").value);
    var resultado=numerouno%numerodos;
    alert ("el resto es "+resultado);

}
