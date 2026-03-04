<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Service\UserServiceSC;
use Illuminate\Http\Request;

class UserController extends Controller
{
    protected UserServiceSC $userServiceSC;

    public function __construct(UserServiceSC $userServiceSC)
    {
        $this->userServiceSC = $userServiceSC;
    }

    public function profile(Request $request)
    {
        $user = $request->user();

        return response()->json([
            'status' => true,
            'data' => $this->userServiceSC->getProfile($user)
        ]);
    }
}
