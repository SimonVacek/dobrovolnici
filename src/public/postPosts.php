<?php
use dobrovolnici\Service\DbService;

include_once '../vendor/autoload.php';

$host = $_ENV['POSTGRES_HOST'];
$port = '5432';
$dbname = "ssnd_user";
$user = $_ENV['POSTGRES_USER'];
$password = $_ENV['POSTGRES_PASSWORD'];

$db = new DbService($host, $port, $dbname, $user, $password);


if (!empty($data)){
    $db = new DbService($host, $port, $dbname, $user, $password);
    $id = $db->query("SELECT count(*) FROM Posts") + 1;
    $db->query('INSERT INTO Posts (id, title, description) VALUES (' . $id . ',' . $data->post->title . ',' . $data->post->description . ')');
} else {
    echo "Error invalid data";
}