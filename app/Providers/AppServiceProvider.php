<?php

namespace App\Providers;

use App\Dao\Impl\UserDaoImpl;
use App\Dao\UserDao;
use App\Service\BaseCalculatorInsuranceSC;
use App\Service\Impl\BaseCalculatorInsuranceSCImpl;
use App\Service\Impl\LoginServiceSCImpl;
use App\Service\Impl\RegistrationAccountSCImpl;
use App\Service\LoginServiceSC;
use App\Service\RegistrationAccountSC;
use Illuminate\Cache\RateLimiting\Limit;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\RateLimiter;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    public function register(): void
    {
        $this->app->bind(
            RegistrationAccountSC::class,
            RegistrationAccountSCImpl::class
        );

        $this->app->bind(
            BaseCalculatorInsuranceSC::class,
            BaseCalculatorInsuranceSCImpl::class
        );

        $this->app->bind(
            LoginServiceSC::class,
            LoginServiceSCImpl::class
        );
        $this->app->bind(UserDao::class, UserDaoImpl::class);
    }

    public function boot(): void
    {
        RateLimiter::for('api', function (Request $request) {
            return Limit::perMinute(5)
                ->by($request->ip());
        });
    }
}
