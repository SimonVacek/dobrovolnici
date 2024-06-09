<?php

use dobrovolnici\Controller\UserController;
use dobrovolnici\Enum\Email;
use dobrovolnici\Exceptions\RouteNotFoundException;
use dobrovolnici\Hydrator\UserHydrator;
use dobrovolnici\Router\Router;
use dobrovolnici\Service\DbService;
use dobrovolnici\Entity\User;
use dobrovolnici\Service\UserModel;

include_once '../vendor/autoload.php';

$host = $_ENV['POSTGRES_HOST'];
$port = '5432';
$dbname = "ssnd_user";
$user = $_ENV['POSTGRES_USER'];
$password = $_ENV['POSTGRES_PASSWORD'];

$db = new DbService($host, $port, $dbname, $user, $password);

$data = [
    "posts" => []
];

$query = 'SELECT * FROM public."Posts" ';
$queryData = $db->query($query);

foreach($queryData as $instance){ 
    array_push($data["posts"] , $instance);
}

header('Content-Type: application/json');

echo json_encode($data);
?>