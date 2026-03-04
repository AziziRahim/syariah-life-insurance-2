<?php

use App\Http\Controllers\Api\LoginController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


Route::get('/ping', function (Request $request) {
    return response()->json([
        'success' => true,
    ]);
});


Route::post('/doRegister',[\App\Http\Controllers\Api\RegistrationAccountController::class,'doRegister']);

Route::post('/calculatorForGuest',[\App\Http\Controllers\Api\BaseCalculatorInsuranceController::class,'doCalculateForGuest']);

Route::post('/login', [LoginController::class, 'login']);
Route::post('/logout', [LoginController::class, 'logout'])
    ->middleware('auth:sanctum');
