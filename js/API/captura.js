/**
 * @author IVAN E LOPEZ GONZALEZ
 */

  function captureSuccess(mediaFiles) {
        var  path;
        path = mediaFiles[0].fullPath;     
        return path;
    }

    // Called if something bad happens.
    // 
    function captureError(error) {
        var msg = 'An error occurred during capture: ' + error.code;
       return msg;
    }




function capturaImg(){
	

	
	 navigator.device.capture.captureImage(captureSuccess, captureError, {limit: 1});
     ruta = captureSuccess;
     
	
	return ruta;
}
