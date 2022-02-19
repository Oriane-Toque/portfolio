<?php

use App\Kernel;
use Symfony\Component\HttpFoundation\Request;

require_once dirname(__DIR__).'/vendor/autoload_runtime.php';

Request::setTrustedProxies(
    // trust *all* requests (the 'REMOTE_ADDR' string is replaced at
    // run time by $_SERVER['REMOTE_ADDR'])
    ['127.0.0.1', 'REMOTE_ADDR'],

    // if you're using ELB, otherwise use a constant from above
    Request::HEADER_X_FORWARDED_AWS_ELB
);

return function (array $context) {
    return new Kernel($context['APP_ENV'], (bool) $context['APP_DEBUG']);
};