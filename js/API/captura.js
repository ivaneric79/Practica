/**
 * @author IVAN E LOPEZ GONZALEZ
 */

var captureSuccess = function(mediaFiles) {
    var  path;
   
        path = mediaFiles[1].fullPath;
        // do something interesting with the file
   
};

// capture error callback
var captureError = function(error) {
    navigator.notification.alert('Error code: ' + error.code, null, 'Capture Error');
};



function capturaImg(){
	
	 navigator.device.capture.captureImage(captureSuccess, captureError, {limit: 1});
     ruta = captureSuccess.path;
     
	
	return ruta;
}
