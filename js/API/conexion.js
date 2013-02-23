// Conexion al servidor

function logSend(nombre,lugar,mail,tel){

$.ajax({
type: "POST",
url: "http://www.igitsoft.com/phtest.php",
data: "nom=" + nombre +"&lug=" + lugar +"&mai="+ mail + "&tel=" + tel
}).done(function( msg ) {
alert( "Data Saved: " + msg );
if(msg=="20"){
	pgAlert("Error","Hubo un error al enviar datos");
}else{
pgAlert("Registrado","Se ha registrado satisfactoriamente");
//Guardar Base de datos local

		}
	
});

}