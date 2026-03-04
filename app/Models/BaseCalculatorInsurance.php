<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class BaseCalculatorInsurance extends Model
{
    protected $table = 'base_calculator_insurance';
    protected $primaryKey = 'id';
    public $incrementing = false;
    protected $keyType = 'string';

    protected $fillable = [
        'id',
        'cust_id',
        'body_mass_index',
        'body_height',
        'age',
        'smoker',
        'base_cal_insurance_param_id',
        'contribution',
        'created_by',
        'created_dt'
    ];
    protected $casts = [
      'id' => 'string',
      'cust_id' => 'string',
      'body_mass_index' => 'float',
      'body_height' => 'integer',
      'age' => 'integer',
      'smoker' => 'string',
      'base_cal_insurance_param_id' => 'string',
      'contribution' => 'integer',
      'created_by' => 'string',
      'created_dt' => 'datetime'
    ];

    protected static function booted(): void
    {
        static::creating(function ($model) {
            if(empty($model->id)){
                $model->id= str_replace('-','',Str::uuid()->toString());
            }
        });
    }
}
