<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

/**
 * @method static create(array $data)
 * @method static Builder|Customer where($column, $operator = null, $value = null, $boolean = 'and')
 * @method static Builder|Customer query()
 * @method static Customer|null first()
 * @method static bool exists()
 * @mixin Builder
 */
class Customer extends Model
{
    protected $table = 'cust';
    protected $primaryKey = 'id';
    public $timestamps = false;
    public $incrementing = false;
    protected $keyType = 'string';
    protected $fillable = [
        'id', 'name', 'mother_name', 'dob', 'phone_no', 'email', 'secret_word',
        'created_dt', 'updated_dt', 'created_by', 'updated_by', 'gender'
    ];

    protected $casts =[
        'id' => 'string',
        'name' => 'string',
        'mother_name' => 'string',
        'dob' => 'date',
        'phone_no' => 'string',
        'email' => 'string',
        'gender' => 'string',
        'secret_word' => 'string',
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
