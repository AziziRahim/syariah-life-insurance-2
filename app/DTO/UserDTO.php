<?php

namespace App\DTO;

class UserDTO
{
    public function __construct(
        public readonly string $password,
    ) {}

    public static function fromRequest(array $data): self
    {
        return new self(
            $data['password']
        );
    }

    /**
     * Dipakai kalau mau update password user
     */
    public function toUserArray(): array
    {
        return [
            'password' => bcrypt($this->password),
        ];
    }
}
