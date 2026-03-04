<?php

namespace app\Dao;

use App\Models\User;


interface UserDao
{
    public function findByCustomerEmail(string $email): ?User;
}
