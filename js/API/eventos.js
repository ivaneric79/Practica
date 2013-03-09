//Eventos
$(document).ready(function(e){
	reservar();
	document.addEventListener("deviceready", function(){
			if(!isLogin())
		window.location.href = "#login";
		
		//funcion para tomar foto
$('#regFoto').tap(function(){
	capturaImg();
});
		
	//Funcionalidad Login
	$('#regSubmit').tap(function(){
		if($('#regNombre').val()!='' && $('#regLugar').val()!='' && $('#regEmail').val()!='' && $('#regTel').val()!=''){
			var nom=$('#regNombre').val();
			var lug=$('#regLugar').val();
			var ema=$('#regEmail').val();
			var tel=$('#regTel').val();
			
			pgAlert("valores",nom+'\n'+lug+'\n'+ema+'\n'+tel);
logSend(nom,lug,ema,tel);

		}else{
			pgAlert("Error",'Todos los campos son requeridos.');	
		}
	});






		
		//otros eventos de phonegap
		//document.addEventListener("pause",funcion,false);
		//document.addEventListener("resume",funcion,false);
		//document.addEventListener("online",funcion,false);
		//document.addEventListener("offline",funcion,false);
		reservar();
		
		}, false);
	

});

function reservar(){
	//seleccionar tipo de habitacion
	$('#nr1 ul[data-role=listview] a').tap(function(){
	$('#nr1').attr('tipo',$(this).parents('li').index());
	
	window.location.href="#nr2";
		});
	
	$('#nr2 #enviar').tap(function(){
		var habs = $('#hr2 ul[data-role=listview] li:eq(1)').children('select').val();
		var pers = $('#hr2 ul[data-role=listview] li:eq(2)').children('select').val();
		var dias = $('#hr2 ul[data-role=listview] li:eq(3)').children('select').val();
		var tipo = $('#hr1').attr('tipo');
		
		//comprueba si esta en linea
		if(!isConnected()){
			guardarReservacion(getId(),habs,pers,dias,tipo);
		}else{
			//sincronizar servidor
		}
	});
	
}