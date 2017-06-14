function Cursos(precio, descuento_alumnos, descuento_familiar) 
{
	     // promt("nb");
var total;
var costo = precio.value;
var descuento1 = descuento_alumnos.value;
var descuento2 = descuento_familiar.value;
var ahorro="0";
if(descuento2 != null)
{
document.getElementById("descuento").value = descuento2;
  total = costo - (costo * descuento2);
  document.getElementById("total_pago").value = total;
  document.getElementById("precio_total").value = costo;
}
if(descuento1 == 0.05)
{
    document.getElementById("descuento").value = descuento1;
  total = costo - (costo * descuento1);
  ahorro=costo-total;
  document.getElementById("total_pago").value ='ahora!! '+total;
  document.getElementById("precio_total").value =costo; 

}
}
