<?php

namespace App\Service;

use App\DTO\CalculatorInsuranceDTO;

interface BaseCalculatorInsuranceSC
{
    public function calculateDataForGuest(CalculatorInsuranceDTO $dto);
}
