<?php

namespace App\DTO;
use Carbon\Carbon;

class CalculatorInsuranceDTO
{
    public function __construct(
        public string $fullName,
        public string $gender,
        public Carbon $dateOfBirth,
        public string $email,
        public string $phone,
        public string $smokerStatus,
        public float  $bodyMass,
        public int    $bodyHeight,
        public int    $periods,
        public int    $compensationAmount,
    ){}

    public static function fromRequest(array $data):self{
        return new self(
          fullName: $data['fullName'],
          gender: $data['gender'],
          dateOfBirth: Carbon::createFromFormat('Y-m-d', $data['dateOfBirth']),
          email: $data['email'],
          phone: $data['phone'],
          smokerStatus: $data['smokerStatus'],
          bodyMass: $data['bodyMass'],
          bodyHeight: $data['bodyHeight'],
          periods: $data['periods'],
          compensationAmount: $data['compensationAmount'],
        );
    }

    public function getAge(string $timezone = 'Asia/Jakarta'): int
    {
        return Carbon::now($timezone)->diffInYears($this->dateOfBirth);
    }
}
