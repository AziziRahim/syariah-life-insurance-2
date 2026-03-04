<?php

namespace App\Http\Controllers\Api;

use App\DTO\CustomerDTO;
use App\Http\Controllers\Controller;
use App\Service\RegistrationAccountSC;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Throwable;

class RegistrationAccountController extends Controller
{
    public function __construct(
        protected RegistrationAccountSC $registrationAccount
    ) {}

    public function doRegister(Request $request): JsonResponse
    {
        try {
            // ✅ VALIDASI REQUEST (SOURCE OF TRUTH)
            $data = $request->validate([
                'fullName'        => 'required|string',
                'motherName'      => 'nullable|string',
                'phoneNumber'     => 'required|string',
                'emailAddress'    => 'required|email',
                'password'        => 'required|string|min:6',
                'confirmPassword' => 'required|same:password',
                'secretWord'      => 'required|string',
                'dateOfBirth'     => 'required|date_format:Y-m-d',
                'gender'          => 'required|in:M,F',
            ]);

            // ✅ DTO VIA FACTORY (ANTI KETUKAR)
            $dto = CustomerDTO::fromRequest($data);

            // (optional debug, hapus kalau sudah OK)
            // dump($dto);

            $this->registrationAccount->validateRegistrationAccount($dto);

            return response()->json([
                'status'  => 'success',
                'message' => 'Registration successfully',
            ], 201);

        } catch (Throwable $exception) {
            return response()->json([
                'message' => $exception->getMessage(),
            ], 400);
        }
    }
}
