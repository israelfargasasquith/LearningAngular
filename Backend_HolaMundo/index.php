<?php

require_once 'vendor/autoload.php';
$app = new \Slim\Slim();

$db = new mysqli('localhost','root','','curso_angular');

//Configuracion de cabeceras HTTP
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Allow: GET, POST, OPTIONS, PUT, DELETE");
$method = $_SERVER['REQUEST_METHOD'];
if($method == "OPTIONS") {
    die();
}



$app->get("/pruebas",function() use($app,$db){
    echo "Hola mundo!";
   //var_dump($db);
});


/* $app->get("/productos",function() use($app,$db){
    echo "Otro texto";
});
 */
$app->get("/productos",function() use($app, $db){
    $sql = "SELECT * FROM productos ORDER BY id DESC;";
    $query = $db->query($sql);

    //var_dump($query->fetch_all());
    $productos =  array();
    while($producto = $query->fetch_assoc()){
        $productos[] = $producto;
    }
    $result = array(
        "status" => "success",
        "code" => 200,
        "data" => $productos
    );

    echo json_encode($result);
});

$app->get("/producto/:id",function($id) use($app, $db){
    $sql = "SELECT * FROM productos WHERE id = ".$id;
    $query = $db->query($sql);
    $result = array(
        "status" => "error",
        "code" => 404,
        "message" => "producto no encontrado"
    );

    if($query->num_rows == 1){
        $producto = $query->fetch_assoc();
        $result = array(
            "status" => "success",
            "code" => 200,
            "data" => $producto
        );
    }
    echo json_encode($result);
});

$app->get("/delete-producto/:id",function($id) use($app, $db){
    $sql = "DELETE FROM productos WHERE id = ".$id;
    $query = $db->query($sql);
    
    if($query){
        $result = array(
            "status" => "success",
            "code" => 200,
            "message" => "producto ".$id." eliminado"
        );
    }else{
        $result = array(
            "status" => "error",
            "code" => 404,
            "message" => "producto no encontrado"
        );
        
    }
    echo json_encode($result);
});


$app->post("/update-producto/:id",function($id) use($app, $db){
    $json = $app->request->post('json');
    $data = json_decode($json,true);

    $sql = "UPDATE productos SET ".
             "nombre = '{$data["nombre"]}', ".
             "descrip = '{$data["descrip"]}', ".
             "price = '{$data["price"]}' ".
             "WHERE id = {$id}";
    //var_dump($sql);

    if(isset($data["imag"])){
        $sql .= "image ='{$data["image"]}', ";
    }

    $query = $db->query($sql);
    
    if($query){
        $result = array(
            "status" => "success",
            "code" => 200,
            "message" => "producto ".$id." actualizad"
        );
    }else{
        $result = array(
            "status" => "error",
            "code" => 404,
            "message" => "producto no actualizado"
        );
        
    }
    echo json_encode($result);
});


$app->post("/upload-file",function() use($app, $db){
   
    if(isset($_FILES['uploads'])){
        $piramideUploader = new PiramideUploader();
        $upload = $piramideUploader->upload('image',"uploads","uploads",array('image/jpeg','image/png','image/gif'));
        $file = $piramideUploader->getInfoFile();
        $file_name = $file['complete_name'];

        if(isset($upload) && $upload["uploaded"]==false){
            $result = array(
                "status" => "error",
                "code" => 404,
                "message" => "producto no subido"
            );      
        }else{
            $result = array(
                "status" => "success",
                "code" => 200,
                "message" => "producto subido",
                "filename" => $file_name
            );
        }
    }

    echo json_encode($result);
});







$app->post("/productos",function() use($app, $db){
    $json = $app->request->post('json');
    $data = json_decode($json,true);
    

    if(!isset($data['nombre'])){
        $data['nombre']=null;
    }
    if(!isset($data['descrip'])){
        $data['descrip']=null;
    }
    if(!isset($data['price'])){
        $data['price']=null;
    }
    if(!isset($data['imag'])){
        $data['imag']=null;
    }

    $query = "INSERT INTO productos VALUES(NULL,".
            "'{$data['nombre']}',".
            "'{$data['descrip']}',".
            "'{$data['price']}',".
            "'{$data['imag']}'".
            ");";

    $insert = $db->query($query);

    $result = array(
        "status" => "error",
        "code" => 404,
        "message" => "producto no creado correctamente"
    );

    if($insert){
        $result = array(
            "status" => "success",
            "code" => 200,
            "message" => "producto creado correctamente"
        );
    }

    echo json_encode($result);

    
    /*  var_dump($data);
    var_dump($query);
    var_dump($json);
    var_dump($_POST);
    var_dump($app->request()->post()); */

});

if(!function_exists("get_magic_quotes_gpc")) {
    function get_magic_quotes_gpc() { return 0; }
}

$app->run();
