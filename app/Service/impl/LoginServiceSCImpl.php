<?php

namespace App\Service\Impl;

use App\Service\LoginServiceSC;
use App\Dao\UserDao;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class LoginServiceSCImpl implements LoginServiceSC
{
    protected UserDao $userDao;

    public function __construct(UserDao $userDao)
    {
        $this->userDao = $userDao;
    }

    public function doLogin(Request $request)
    {
        $data = $request->validate([
            'email'    => 'required|email',
            'password' => 'required|string',
        ]);

        $user = $this->userDao->findByCustomerEmail($data['email']);

        if (!$user || !Hash::check($data['password'], $user->password)) {
            return response()->json(['message' => 'Invalid credentials'], 401);
        }

        // ✅ login session (optional, boleh dipakai / boleh tidak)
        Auth::loginUsingId($user->cd);

        $tokenResult = $user->createToken('react-token');

        // ✅ SET EXPIRED (contoh: 2 jam)
        $tokenResult->accessToken->expires_at = now()->addHours(2);
        $tokenResult->accessToken->save();

        return response()->json([
            'token'      => $tokenResult->plainTextToken, // ← string ke FE
            'expires_at' => $tokenResult->accessToken->expires_at,
            'user'       => $user,
        ]);
    }

    public function doLogout(Request $request)
    {
        // ✅ revoke token yang sedang dipakai
        $request->user()->currentAccessToken()->delete();

        return response()->json([
            'message' => 'Logout success'
        ]);
    }
}
