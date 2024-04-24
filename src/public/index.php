<?php

use dobrovolnici\Entity\User;
use dobrovolnici\Hydrator\UserHydrator;
use dobrovolnici\Service\DbService;
use dobrovolnici\Service\UserModel;

include_once '../vendor/autoload.php';

// Parametre pripojenia k DB
$host = $_ENV['POSTGRES_HOST'];
$port = '5432';
$dbname = $_ENV['APP_DB_NAME'];
$user = $_ENV['POSTGRES_USER'];
$password = $_ENV['POSTGRES_PASSWORD'];

// vytvorenie instancie triedy UserService
$userModel = new UserModel(
    new DbService($host, $port, $dbname, $user, $password)
);

$users = $userModel->getAll();

// vypis vysledkov
include 'template.php';