<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class BaseCalculatorInsuranceParameter extends Model
{
    protected $table = 'base_cal_insurance_param';
    protected $primaryKey = 'id';
    public $incrementing = false;
    protected $keyType = 'string';

    protected $fillable = [
      'id','bmi_rate','rate','smoker_rate','constant','created_dt','updated_dt','created_by','updated_by','is_deleted','is_inactive'
    ];
    protected $casts =[
        'is_deleted' => 'boolean',
        'is_inactive' => 'boolean',
        'id' => 'string',
        'bmi_rate' => 'float',
        'rate' => 'float',
        'smoker_rate' => 'float',
        'constant' => 'integer',
        'created_dt' => 'datetime',
        'updated_dt' => 'datetime',
        'created_by' => 'string',
        'updated_by' => 'string',
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
