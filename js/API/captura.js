/**
 * @author IVAN E LOPEZ GONZALEZ
 */

 

    // Called if something bad happens.
    // 
 




function capturaImg(){
	 var  path;
	
	 navigator.device.capture.captureImage(function captureSuccess(mediaFiles) {
       
        path = mediaFiles[0].fullPath; 
        alert (path);    
       
    }, captureError(error) {
        
        path = 'An error occurred during capture: ' + error.code;
        alert (path);
    }, {limit: 1});
     
     
	
	
}
