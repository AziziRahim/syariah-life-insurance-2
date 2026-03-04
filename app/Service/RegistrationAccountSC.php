<?php

namespace App\Service;

use App\DTO\CustomerDTO;

interface RegistrationAccountSC
{
    public function validateRegistrationAccount(CustomerDTO $data);
}
