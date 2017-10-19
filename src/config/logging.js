/**
 * Configure the logging so debug logging is only active in development environments.
 */
export default function ($logProvider, env) {
    'ngInject';

    $logProvider.debugEnabled(env.IS_DEVELOPMENT);
}
