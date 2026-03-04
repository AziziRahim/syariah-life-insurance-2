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
        Schema::create('user', function (Blueprint $table) {
            $table->string('cd', 32)->primary();
            $table->string('cust_id', 32);
            $table->string('userNoPolis',32);
            $table->string('password', 200);
            $table->string('phone', 32)->nullable();
            $table->date('created_dt');
            $table->string('created_by', 32);
            $table->date('updated_dt')->nullable();
            $table->string('updated_by', 32)->nullable();
            $table->string('is_inactive',1);
            $table->string('is_delete',1);
            $table->string('status',10);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('user');
    }
};
