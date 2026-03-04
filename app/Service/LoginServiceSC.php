<?php

namespace App\Service;


use Illuminate\Http\Request;
interface LoginServiceSC
{
    public function doLogin(Request $request);
    public function doLogout(Request $request);
}
