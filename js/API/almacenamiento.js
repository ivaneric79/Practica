function crearUsuario(){
	window.localStorgate.setItem("Usuario",$('regNombre').val());
	window.localStorgate.setItem("Id",dispositivo()['id']);
	
}

function isLogin(){
	if(window.localStorgate.getItem('Usuario')!=undefined && window.localStorgate.getItem('Id')!=undefined)
	return true
	else
	return false;
}

function accesoDB(){

var db = window.openDatabase("hotel", "1.0", "Hotel DB", 200000);
return db;
	
	
}

function iniciarDB(){


function populateDB(tx) {
   
     tx.executeSql('CREATE TABLE IF NOT EXISTS reserva (rId unique, fecha, habitaciones, personas, dias, tipo)');
     tx.executeSql('CREATE TABLE IF NOT EXISTS historial (hId unique, fecha, habitaciones, personas, dias)');
    
}

function errorCB(err) {
    pgAlert("Error en la base de datos",err.code);
}

function successCB() {
   pgAlert('Registro satisfactorio!','Se ha registrado');
}



accesoDB().transaction(populateDB, errorCB, successCB);

}


function getID(){
	var regreso=0;
	
	 function querySuccess(tx, resultado) {
        regreso = resultado.rows.length;
        }
        
    function errorCB(err) {
        alert(err.code);
    }
	
	function nfilas(tx){
		tx.executeSql('SELECT * FROM reserva',[],querySuccess,errorCB);
	}

		
	accesoDB().transaction(nfilas,errorCB);
	return regreso+1;
	
}

function guardarReservacion(id,habs,pers,dias,tipo){
	var f=new date();
	var fecha = d.getDate() + '/' + f.getMonth() + '/' + f.getFullYear();
	
      
        accesoDB().transaction(function(tx){tx.executeSql('INSERT INTO reserva (rId, fecha, habitaciones, personas, dias, tipo) VALUES ('+id+',"'+fecha+'","'+habs+'","'+pers+'","'+dias+'","'+tipo+'")');},
        errorCB,successCB);
       

	
	//insertar tablas
}

