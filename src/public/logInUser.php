<?php

header('Content-Type: application/json');
header("Access-Control-Allow-Origin: *");

use dobrovolnici\Service\DbService;

include_once '../vendor/autoload.php';

$host = '172.26.0.2';
$port = '5432';
$dbname = 'ssnd-db';
$user = $_ENV['POSTGRES_USER'];
$password = $_ENV['POSTGRES_PASSWORD'];
try {
    $db = new DbService($host, $port, $dbname, $user, $password);
    
    /*$username = $_POST['username'];
    $password = $_POST['password'];*/

    $username = "Janko";
    $password = "jankoJeCool123";

    $passwordFromQuery = $db->query("SELECT password FROM public.\"Users\" WHERE username = '" . $username . "'");
    
    if ($passwordFromQuery[0]['password'] == $password) {
        $user = $db->query("SELECT * FROM public.\"Users\" WHERE username = '" . $username . "'");
        echo json_encode($user);
    } else {
        echo "User not found";
    }
    
} 
catch(Exception $e) {
    echo "Error" . $e->getMessage() . "\n";
}