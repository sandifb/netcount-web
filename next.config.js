const path = require('path');

module.exports = {

    target: "serverless",
    
    env: {
        appName: "NetCount",
        appIcon: "/images/logo-round.png",
        appHostLocal: process.env.DB_HOST,

        appHost: process.env.APP_HOST,
        appKey: process.env.APP_KEY,
        testName: process.env.TEST_NAME,
    },

    
    webpack(config) {
        config.resolve.alias['icons'] = path.join(__dirname, 'src/icons');
        config.resolve.alias['components'] = path.join(__dirname, 'src/components');
        config.resolve.alias['libraries'] = path.join(__dirname, 'src/libraries');
        // config.resolve.alias['services'] = path.join(__dirname, 'src/services');
        return config;
    },

    async rewrites() {
        return [
            {
                source: '/login',
                destination: '/auth/login'
            }, {
                source: '/register',
                destination: '/auth/register'
            }
        ]
    }
}