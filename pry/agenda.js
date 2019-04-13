$(document).ready(function () {
    $("#btnregistrar").click(function (e) { 
        e.preventDefault();
        registrar();
        
    
    });
    $("body").on("click", ".opcion-eliminar" , function (e) {
        var fila = $(this).parents().get(1);
        fila.remove();
    });
});

function registrar()
{
var nombre= $("#txtnombre").val();
var correo= $("#txtCorreo").val();
var fecha= $("#fecha").val();
var pais= $("#cbopaís").val();
var sexo= $("input:radio[name=rbsexo]:checked").val();

//creacion de fila
var fila ="";
fila+="<tr>";
fila+="<td>"+nombre+"</td>";
fila+="<td>"+correo+"</td>";
fila+="<td>"+fecha+"</td>";
fila+="<td>"+pais+"</td>";
fila+="<td>"+sexo+"</td>";
fila+="<td>"+'<button class="btn btn-danger btn-sm opcion-eliminar">x</button>'+"</td>";
fila+="</tr>";

$("#tbldatos").append(fila);

//agregar fila a tbody
console.log("Nombre: "+nombre);
console.log("Correo: "+correo);
console.log("Fecha nacimiento: "+fecha);
console.log("Pais: "+pais);
console.log("Sexo: "+sexo);
}