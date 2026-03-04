<?php

namespace App\DTO;

use Carbon\Carbon;

class CustomerDTO
{
    public function __construct(
        public string $fullName,
        public ?string $motherName,
        public string $phoneNumber,
        public string $emailAddress,
        public string $password,
        public string $secretWord,
        public Carbon $dateOfBirth,
        public string $gender,
    ) {}

    /**
     * ✅ Untuk API Request
     */
    public static function fromRequest(array $data): self
    {
        return new self(
            fullName: $data['fullName'],
            motherName: $data['motherName'] ?? null,
            phoneNumber: $data['phoneNumber'],
            emailAddress: $data['emailAddress'], // ✅ FIX
            password: $data['password'],         // ✅ TAMBAH
            secretWord: $data['secretWord'],
            dateOfBirth: Carbon::createFromFormat('Y-m-d', $data['dateOfBirth']),
            gender: $data['gender'],
        );
    }

    /**
     * ✅ Untuk DB Insert (Customer)
     */
    public function toCustomerArray(): array
    {
        return [
            'name'        => $this->fullName,
            'mother_name' => $this->motherName,
            'phone'       => $this->phoneNumber,
            'email'       => $this->emailAddress,
            'password'    => bcrypt($this->password), // ✅ HASH DI SINI
            'secret_word' => $this->secretWord,
            'dob'         => $this->dateOfBirth->toDateString(),
            'gender'      => $this->gender,
        ];
    }
}
