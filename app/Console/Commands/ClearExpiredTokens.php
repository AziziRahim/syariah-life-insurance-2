<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\DB;

class ClearExpiredTokens extends Command
{
    protected $signature = 'tokens:clear-expired';

    protected $description = 'Delete expired Sanctum tokens';

    public function handle(): int
    {
        DB::table('personal_access_tokens')
            ->whereNotNull('expires_at')
            ->where('expires_at', '<', now())
            ->delete();

        $this->info('Expired tokens cleared.');

        return Command::SUCCESS;
    }
}
