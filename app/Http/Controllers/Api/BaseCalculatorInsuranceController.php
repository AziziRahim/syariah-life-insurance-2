<?php

namespace App\Http\Controllers\Api;

use App\Http\Requests\BaseCalculatorInsuranceRequest;
use App\Service\BaseCalculatorInsuranceSC;
use App\DTO\CalculatorInsuranceDTO;
use Carbon\Carbon;
use Exception;
use Illuminate\Http\Request;

class BaseCalculatorInsuranceController
{
    /**
     * @throws Exception
     */

    private BaseCalculatorInsuranceSC $calculator;

    public function __construct(BaseCalculatorInsuranceSC $calculator)
    {
        $this->calculator = $calculator;
    }
    public function doCalculateForGuest(BaseCalculatorInsuranceRequest $request)
    {

        $validated = $request->validated();
        if($validated) {
            $dto = new CalculatorInsuranceDTO(
                fullName: $request->fullName,
                gender: $request->gender,
                dateOfBirth: Carbon::createFromFormat('Y-m-d', $request['dateOfBirth']),
                email: $request->email,
                phone: $request->phone,
                smokerStatus: $request->smokerStatus,
                bodyMass: $request->bodyMass,
                bodyHeight: $request->bodyHeight,
                periods: $request->periods,
                compensationAmount: $request->compensationAmount,
            );
            $dto->compensationAmount = $request->compensationAmount;
            $dto->smokerStatus = $request->smokerStatus;
            $dto->bodyMass = $request->bodyMass;
            $dto->bodyHeight = $request->bodyHeight;
            $dto->getAge();

            $result = $this->calculator->calculateDataForGuest($dto);
            return response()->json([
                "success" => true,
                "calculateResultAmount" => $result
            ]);
        }else{
            return response()->json([
                "success" => false,
                "message" => "Bad request"
            ],500);
        }


    }
}
