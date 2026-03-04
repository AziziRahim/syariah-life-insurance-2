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
        Schema::create('cust', function (Blueprint $table) {
            $table->string('id', 32)->primary();
            $table->string('name',32);
            $table->string('email', 32);
            $table->string('phone_no', 32)->nullable();
            $table->string('mother_name', 32);
            $table->date('dob');
            $table->string('gender',2);
            $table->date('created_dt');
            $table->date('updated_dt')->nullable();
            $table->string('created_by', 32);
            $table->string('updated_by', 32)->nullable();
            $table->string('secret_word', 32);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('cust');
    }
};
