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
        Schema::create('base_calculator_insurance', function (Blueprint $table) {
            $table->string('id',32)->primary();
            $table->string('cust_id',32);
            $table->float('body_mass_index',2);
            $table->integer('body_height');
            $table->integer('age');
            $table->string('smoker',1);
            $table->string('base_cal_insurance_param_id',32);
            $table->integer('contribution');
            $table->string('created_by',32);
            $table->date('created_dt');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('base_calculator_insurance');
    }
};
