<?php

namespace App\Dao\Impl;

use App\Dao\UserDao;
use App\Models\User;

class UserDaoImpl implements UserDao
{
    public function findByCustomerEmail(string $email): ?User
    {
        return User::query()
            ->join('cust', 'cust.id', '=', 'user.cust_id')
            ->select('user.*')
            ->where('cust.email', $email)
            ->where('user.status', 'ACTIVE')
            ->where('user.is_delete', 0)
            ->where('user.is_inactive', 0)
            ->first();
    }
}
