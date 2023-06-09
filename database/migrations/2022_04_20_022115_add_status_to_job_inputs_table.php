<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up(): void
    {
        Schema::table('job_inputs', static function (Blueprint $table) {
            $table->unsignedTinyInteger('status')->default(0)->after('name');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down(): void
    {
        Schema::table('job_inputs', static function (Blueprint $table) {
            $table->dropColumn(['status']);
        });
    }
};
