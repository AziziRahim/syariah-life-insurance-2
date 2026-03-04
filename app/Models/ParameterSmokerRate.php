<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ParameterSmokerRate extends Model
{
    protected $table = 'smoker_rate';
    protected $primaryKey = 'cd';
    public $timestamps = false;
    public $incrementing = false;
    protected $keyType = 'string';
    protected $fillable = [
        'cd', 'rate','created_dt','created_by'
    ];
    protected $casts = [
        'cd' => 'string',
        'rate' => 'float',
        'is_active' => 'string',
        'created_dt' => 'datetime',
        'created_by' => 'string',
    ];

    public mixed $cd;
    public mixed $rate;
    public mixed $is_active;
    public mixed $created_dt;
    public mixed $created_by;

}
