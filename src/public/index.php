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

// Parametre pripojenia k DB
$host = $_ENV['POSTGRES_HOST'];
$port = '5432';
$dbname = $_ENV['APP_DB_NAME'];
$user = $_ENV['POSTGRES_USER'];
$password = $_ENV['POSTGRES_PASSWORD'];

// Vytvoríme si router

$router = new Router();

// Nakonfigurjeme router
$router->get('/users', [UserController::class,'showUsers']);

// volanie routeru
try {
    echo $router->resolve($_SERVER['REQUEST_METHOD'], $_SERVER['REQUEST_URI']);
} catch (RouteNotFoundException $e) {
    http_response_code(404);
    include_once '404.php';
}