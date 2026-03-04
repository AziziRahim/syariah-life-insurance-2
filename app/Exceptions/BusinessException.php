<?php

namespace App\Exceptions;

use Exception;

class BusinessException extends Exception
{
    protected int $status;
    protected string $errorCode;

    public function __construct(
        string $message,
        string $errorCode = 'BUSINESS_ERROR',
        int $status = 422
    ) {
        parent::__construct($message);
        $this->errorCode = $errorCode;
        $this->status = $status;
    }

    public function getStatus(): int
    {
        return $this->status;
    }

    public function getErrorCode(): string
    {
        return $this->errorCode;
    }
}
