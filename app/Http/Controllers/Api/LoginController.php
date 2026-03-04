<?php


namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Service\LoginServiceSC;
use Illuminate\Http\Request;

class LoginController extends Controller
{
    public function __construct(
        protected LoginServiceSC $service
    ) {}

    public function login(Request $request)
    {
        return $this->service->doLogin($request);
    }

    public function logout(Request $request)
    {
        return $this->service->doLogout($request);
    }
}
