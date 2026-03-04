<?php

namespace App\Service\impl;

use App\Exceptions\BusinessException;
use App\Service\BaseCalculatorInsuranceSC;
use App\DTO\CalculatorInsuranceDTO;
use Exception;
use Illuminate\Support\Str;
use Carbon\Carbon; // Assuming Carbon is available for date calculations

class BaseCalculatorInsuranceSCImpl implements BaseCalculatorInsuranceSC
{
    /**
     * Age-based insurance rates
     */
    private const AGE_RATES = [
        17 => 1.23,
        18 => 1.23,
        19 => 1.23,
        20 => 1.23,
        21 => 1.23,
        22 => 1.23,
        23 => 1.23,
        24 => 1.23,
        25 => 1.25,
        26 => 1.25,
        27 => 1.25,
        28 => 1.26,
        29 => 1.28,
        30 => 1.28,
        31 => 1.36,
        32 => 1.45,
        33 => 1.48,
        34 => 1.60,
        35 => 1.82,
        36 => 1.94,
        37 => 2.09,
        38 => 2.27,
        39 => 2.42,
        40 => 2.66,
        41 => 2.89,
        42 => 3.15,
        43 => 3.48,
        44 => 3.72,
        45 => 3.99,
        46 => 4.36,
        47 => 4.73,
        48 => 5.15,
        49 => 5.55,
        50 => 6.01,
        51 => 6.56,
        52 => 7.19,
        53 => 7.87,
        54 => 8.78,
        55 => 9.63,
        56 => 10.47,
        57 => 11.39,
        58 => 12.38,
        59 => 13.73,
        60 => 14.99,
        61 => 16.41,
        62 => 18.00,
        63 => 21.44,
        64 => 23.56,
    ];

    /**
     * @throws BusinessException
     * @throws Exception
     */
    public function calculateDataForGuest(CalculatorInsuranceDTO $dto): float
    {
        try {
            $compensationAmount = $dto->compensationAmount;
            $smokerStatus = Str::lower($dto->smokerStatus);
            $bmiRateRaw = ($dto->bodyMass / ($dto->bodyHeight * $dto->bodyHeight)) * 10000;
            $bmiRate = round($bmiRateRaw, 1);
            if ($bmiRate >= 16.00 && $bmiRate <= 30.00) {
                $bmiRate = 0;
            } elseif ($bmiRate >= 30.00 && $bmiRate <= 34.00) {
                $bmiRate = 25.00;
            } elseif ($bmiRate >= 34.00 && $bmiRate <= 37.00) {
                $bmiRate = 50.00;
            } elseif ($bmiRate >= 37.00 && $bmiRate <= 39.00) {
                $bmiRate = 75.00;
            } else {
                throw new BusinessException(
                    message: 'BMI value is not qualified',
                    errorCode: 'BMI_NOT_QUALIFIED',
                    status: 422
                );
            }

            // Calculate age from date of birth
            $dateOfBirth = Carbon::parse($dto->dateOfBirth); // Assuming $dto->dateOfBirth is a valid date string
            $age = $dateOfBirth->age; // This gives the age in years

            if (!isset(self::AGE_RATES[$age])) {
                throw new BusinessException(
                    message: 'Age is not qualified for insurance calculation',
                    errorCode: 'AGE_NOT_QUALIFIED',
                    status: 422
                );
            }

            $insuranceRate = self::AGE_RATES[$age];
            $smokerRate = 0; // Assuming smoker rate logic is not yet implemented or always 0

            return $compensationAmount * ($insuranceRate * (1 + $bmiRate + $smokerRate)) / 1000;
        } catch (Exception $e) {
            throw new Exception($e);
        }
    }
}
