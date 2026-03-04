<?php

namespace App\Service\impl;

use App\Exceptions\BusinessException;
use App\Service\BaseCalculatorInsuranceSC;
use App\DTO\CalculatorInsuranceDTO;
use Exception;
use Illuminate\Support\Carbon;
use Illuminate\Support\Str;

class BaseCalculatorInsuranceSCImpl implements BaseCalculatorInsuranceSC
{
    /**
     * @throws BusinessException
     * @throws Exception
     */
    public function calculateDataForGuest(CalculatorInsuranceDTO $dto): float
    {
        try {

            $compensationAmount = $dto->compensationAmount;
//            $smokerStatus = Str::lower($dto->smokerStatus);
            $bmiRateRaw = ($dto->bodyMass/($dto->bodyHeight*$dto->bodyHeight)) * 10000;
            $bmiRate = round($bmiRateRaw,1);
            if($bmiRate >= 16.00 && $bmiRate <= 30.00){
                $bmiRate = 0;
            }else if ($bmiRate >= 30.00 && $bmiRate <= 34.00){
                $bmiRate = 25.00;
            }else if ($bmiRate >= 34.00 && $bmiRate <= 37.00){
                $bmiRate = 50.00;
            }else if ($bmiRate >= 37.00 && $bmiRate <= 39.00){
                $bmiRate = 75.00;
            }else {
                throw new BusinessException(
                    message: 'BMI value is not qualified',
                    errorCode: 'BMI_NOT_QUALIFIED',
                    status: 422
                );
            }
            $smokerRate = 0;
            $insuranceRate = 2.09;
            return $compensationAmount*($insuranceRate*(1+$bmiRate+$smokerRate))/1000;
        }catch (Exception $e){
            throw new Exception($e);
        }

    }
}
