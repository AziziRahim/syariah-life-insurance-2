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
        Schema::create('parameter_smoker_rates', function (Blueprint $table) {
            $table->string('id', 5)->primary();
            $table->float('rate',2);
            $table->string('is_active',1);
            $table->string('created_by', 200);
            $table->date('created_dt')->date(now());
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('parameter_smoker_rates');
    }
};
