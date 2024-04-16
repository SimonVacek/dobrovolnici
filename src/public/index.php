<?php

include_once '../vendor/autoload.php';

use dobrovolnici\Entity\User;

$user = new User(
    'Janko Hrasko',
    'janko.hrasko@gmail.com',
    password_hash('password', PASSWORD_DEFAULT)
);

echo $user->getName() . PHP_EOL;