<?php

namespace App\Service\Impl;

use App\DTO\CustomerDTO;
use App\Models\Customer;
use App\Models\User;
use App\Service\RegistrationAccountSC;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Throwable;

class RegistrationAccountSCImpl implements RegistrationAccountSC
{
    /**
     * @throws Throwable
     */
    public function validateRegistrationAccount(CustomerDTO $data)
    {
        return DB::transaction(function () use ($data) {

            $customer = Customer::create([
                'name'        => $data->fullName,
                'mother_name' => $data->motherName,
                'dob'         => $data->dateOfBirth->toDateString(), // ✅ SAFE
                'gender'      => $data->gender,
                'phone_no'    => $data->phoneNumber,
                'email'       => $data->emailAddress,
                'secret_word' => $data->secretWord,
                'created_dt'  => now(),
                'created_by'  => 'System',
            ]);

            // ✅ CREATE USER
            $user = User::create([
                'cust_id'     => $customer->id, // pastikan PK ini bener
                'userNoPolis' => 'Not Registered',
                'password'    => Hash::make($data->password),
                'created_dt'  => now(),
                'created_by'  => 'System',
                'is_inactive' => 0,
                'is_delete'   => 0,
                'status'      => 'ACTIVE',
            ]);

            return [
                'customer' => $customer,
                'user'     => $user,
            ];
        });
    }
}
