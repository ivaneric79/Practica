/**
 * @author IVAN E LOPEZ GONZALEZ
 */


function subirarchivo(ruta) {
        var ft = new FileTransfer(),
           
          

        ft.upload(ruta,
            "http://igitsoft.com/pgtest.php",
            function(result) {
               pgAlert('Imagen subida',result.responseCode+'\n'+result.bytesSent);
               crearUsuario();
               iniciarDB();
               
              
            },
            function(error) {
                pgAlert('Error al subir imagen', error.code);
            },
            { fileKey: 'archivo',filename:'eric.jpg'});   
    }


