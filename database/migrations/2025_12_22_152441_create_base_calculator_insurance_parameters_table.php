<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('base_cal_insurance_param', function (Blueprint $table) {
            $table->string('id',32) ->primary();
            $table->float('bmi_rate', 3,2);
            $table->float('rate', 3,2);
            $table->float('smoker_rate',3,2);
            $table->float('constant',5);
            $table->date('created_dt');
            $table->date('updated_dt');
            $table->string('created_by',32);
            $table->string('updated_by',32);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('base_cal_insurance_param');
    }
};
