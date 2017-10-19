/**
 * This service loads the environment specific configuration files:
 *  - development.js
 *  - production.js
 *
 * based on the variables defined in webpack.config.js.
 * When building in production mode, webpack will optimize the code, and completely exclude the unused configuration
 * (e.g. development.js), so the developers can safely include any sensible data in the configuration files (API keys, etc.).
 */
export default function config() {
    'ngInject';

    if (IS_DEVELOPMENT) {
        // Will be included only in development builds
        return require('./development').default;
    } else if (IS_PRODUCTION) {
        // Will be included only in production builds
        return require('./production').default;
    }

    throw new Error('Invalid configuration! Did you set the NODE_ENV variable properly?');
}
