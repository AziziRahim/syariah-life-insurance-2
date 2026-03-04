<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class BaseCalculatorInsuranceRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'fullName' => 'required|string|min:3|max:50',
            'gender' => 'required|string|in:male,female',
            'dateOfBirth' => 'required|date',
            'email' => 'required|string|email|max:50',
            'phone' => 'required|string|min:10',
            'smokerStatus' => 'required|string|in:yes,no',
            'bodyHeight' => 'required|numeric|min:1',
            'bodyMass' => 'required|numeric|min:10',
            'periods' => 'required|integer|between:1,100',
            'compensationAmount' => 'required|numeric|min:1',
        ];
    }
}
