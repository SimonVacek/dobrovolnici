<?php

/*
use dobrovolnici\Service\DbService;
header("Access-Control-Allow-Origin: *");
header('Content-Type: application/json');
include_once '../vendor/autoload.php';

$host = '172.26.0.2';
$port = '5432';
$dbname = "ssnd";
$user = $_ENV['POSTGRES_USER'];
$password = $_ENV['POSTGRES_PASSWORD'];



$db = new DbService($host, $port, $dbname, $user, $password);


if(isset($_POST)) {
    $data = file_get_contents("php://input");
    echo $data;
    $posty = json_decode($data, true); //bude php pole <3
    echo $posty["title"];
    
    echo "AHOJ";
}

if (!empty($posty)){
    $db = new DbService($host, $port, $dbname, $user, $password);
    $id = $db->query("SELECT count(*) FROM Posts") + 1;
    $db->query('INSERT INTO Posts (id, title, description) VALUES (' . $id . ',' . $data->post->title . ',' . $data->post->description . ')');
} else {
    echo "Error invalid data";
}


*/

echo json_encode($_REQUEST);