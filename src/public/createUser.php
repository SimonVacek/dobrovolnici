<?php

use dobrovolnici\Service\ApiService;
use dobrovolnici\Service\DbService;

include_once '../vendor/autoload.php';

$host = '172.26.0.2';
$port = '5432';
$dbname = 'ssnd-db';
$user = $_ENV['POSTGRES_USER'];
$password = $_ENV['POSTGRES_PASSWORD'];

try {
    $db = new DbService($host, $port, $dbname, $user, $password);
    $uuid = new ApiService("https://www.uuidgenerator.net/api/version7");
    $uuid = $uuid->getResult();
    $uuid = substr($uuid, 2, -2);
    //echo $uuid;

    /*$name = $_POST['username'];
    $password = $_POST['password'];
    $email = $_POST['email'];*/
    
    //temp solution:
    $name = "Janko";
    $password = "jankoJeCool123";
    $email = "jankovProfesnlMail@gmail.com";
    $verifyUser =  $db->query("SELECT count(*) FROM public.\"Users\" WHERE username = '" . $name . "'");

    if ($verifyUser[0]['count'] == 0) {
        $query = "INSERT INTO public.\"Users\" VALUES ('". $uuid ."', '" . $name . "', '". $password ."', '". $email ."')";
        $db->query($query);
        echo "User created";
    } else {
        echo "User already exists";
    }
    
} 
catch(Exception $e) {
    echo "Error" . $e->getMessage() . "\n";
}