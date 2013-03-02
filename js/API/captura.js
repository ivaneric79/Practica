/**
 * @author IVAN E LOPEZ GONZALEZ
 */

 

    // Called if something bad happens.
    // 
 




function capturaImg(){
	 var  path;
	
	 navigator.device.capture.captureImage(function captureSuccess(mediaFiles) {
       
        path = mediaFiles[0].fullPath; 
        pgAlert('captura de imagen',path);  
       
    },function captureError(error) {
        
        pgAlert('captura de imagen',error.code); 
       
    }, {limit: 1});
     
     
	
	
}
