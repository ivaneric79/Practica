//Eventos
$(document).ready(function(e){
	document.addEventListener("deviceready", function(){
			if(!isLogin())
		window.location.href = "#login";
		
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
//funcion para tomar foto
$('#regFoto').tap(function(){
	alert(capturaImg());
}





		
		//otros eventos de phonegap
		//document.addEventListener("pause",funcion,false);
		//document.addEventListener("resume",funcion,false);
		//document.addEventListener("online",funcion,false);
		//document.addEventListener("offline",funcion,false);
		
		
		}, false);
	

});

function isLogin(){
	return false;
}