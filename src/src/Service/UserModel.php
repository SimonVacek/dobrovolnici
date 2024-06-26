<?php

namespace dobrovolnici\Service;

use dobrovolnici\Enum\Email;
use dobrovolnici\Hydrator\UserHydrator;

class UserModel
{
    private DbService $dbService;
    
    public function __construct(DbService $dbService)
    {
        $this->dbService = $dbService;
    }
    
    public function getAll(): array
    {
        $result = $this->dbService->query("SELECT * FROM ssnd_user");
        
        $users = [];
        
        $userHydrate = new UserHydrator();
        
        foreach ($result as $row) {
            $users[] = $userHydrate->hydrate($row);
        }
        
        return $users;
    }
    
    public function getUserByEmail(Email $email): User
    {
        $result = $this->dbService->query("SELECT * FROM ssnd_user WHERE email = :email",
            ['email' => (string)$email]);
        
        return $user;
    }
}