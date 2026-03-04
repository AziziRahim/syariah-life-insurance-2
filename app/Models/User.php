<?php

namespace App\Models;

use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Laravel\Sanctum\HasApiTokens;
use Illuminate\Support\Str;

/**
 * @method static \Illuminate\Database\Eloquent\Builder|static create(array $attributes)
 */
class User extends Authenticatable
{
    use HasApiTokens, HasFactory;

    protected $table = 'user';
    protected $primaryKey = 'cd';
    public $timestamps = false;
    public $incrementing = false;
    protected $keyType = 'string';

    protected $fillable = [
        'cd',
        'cust_id',
        'userNoPolis',
        'password',
        'status',
        'created_dt',
        'updated_dt',
        'created_by',
        'updated_by',
        'is_inactive',
        'is_delete',
    ];

    protected $hidden = [
        'password',
    ];

    protected $casts = [
        'cd'         => 'string',
        'cust_id'    => 'string',
        'userNoPolis'=> 'string',
        'status'     => 'string',
        'created_dt' => 'datetime',
        'updated_dt' => 'datetime',
    ];

    protected static function booted(): void
    {
        static::creating(function ($model) {
            if (empty($model->cd)) {
                $model->cd = str_replace('-', '', Str::uuid()->toString());
            }
        });
    }
}
