var boton = document.getElementById('calculo');
boton.addEventListener("click", operacionX);

function operacionX(){
    //ingresos
    var sueldoMes= document.getElementById('sueldo_mensual').value;
    var ingresoExtra = document.getElementById('ingreso_extra').value;

    var a = parseInt(sueldoMes);
    var b = parseInt(ingresoExtra);
    document.getElementById('totalIngreso').innerHTML= a+b;
    
    //egresos
    //comida
    var comida = document.getElementById('gasto_comida').value;
     var c = parseInt(comida);
     var comi = c*30;
     document.getElementById('parcialComida').innerHTML = comi;

     //transporte
     var transporte = document.getElementById('gasto_transporte').value;
     var diasTrans = document.getElementById('dias_transporte').value;

     var d= parseInt(transporte);
     var e = parseInt(diasTrans);

     var trans= (d * e) * 4;
     document.getElementById('parcialTransporte').innerHTML = trans;

     //renta
     var renta = document.getElementById('gasto_renta').value;
     var f = parseInt(renta);
     document.getElementById('parcialRenta').innerHTML= f;

     //servicios
     var agua= document.getElementById('gasto_agua').value;
     var luz = document.getElementById('gasto_luz').value;
     var gas= document.getElementById('gasto_gas').value;
     var internet= document.getElementById('gasto_internet').value;

     var g= parseInt(agua);
     var h= parseInt(luz);
     var i= parseInt(gas);
     var j= parseInt(internet);

     var servi = g + h + (i/2) + j;
     document.getElementById('parcialServicios').innerHTML = servi;


     //resultado
     var ingreso= a + b;
     var egresos= comi + trans + f + servi;

     document.getElementById('bueno').innerHTML= "Total ingresos  "+ "$"+ingreso + " -";
     document.getElementById('malo').innerHTML= "Total gastos  "+ "$"+egresos;

     if(ingreso > egresos){
         document.getElementById('resultado').innerHTML = "FEICIDADES!!" + "<br>" + 
         "Tus ingresos son mayores a tus gastos";
         document.getElementById('resultado').style.backgroundColor = "rgb(47, 151, 47)";
         document.getElementById('consejo').innerHTML = "Tienes un sobrante de " + "$"+(ingreso-egresos);
     }
     else if(ingreso < egresos){
         document.getElementById('resultado').innerHTML = "Que amarga sorpresa." + "<br>" + "Tus gastos son mayores a tus ingresos";
         document.getElementById('resultado').style.backgroundColor = "rgb(252, 92, 92)";
         document.getElementById('consejo').innerHTML = "Debes reducir tu gastos o encontrar otra fuente de ingresos "
     }else{
         document.getElementById('resultado').innerHTML = "Asegurate de que llenaste todos los campos vacios, y que solo usaste numeros.";
         document.getElementById('resultado').style.backgroundColor = "yellow";
     }
}