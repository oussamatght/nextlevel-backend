module.exports = ({ env }) => ({
    auth: {
        secret: env('ADMIN_JWT_SECRET', 'c4c386f517fe2742f0af265346eda5ee8725d172eeb74702b15addeacac41787b2449d7005bc12a1839b2fbb9dbd167c06117cc64cdf1c26d25b8c19ed5f7273'),
    },
    apiToken: {
        salt: env('API_TOKEN_SALT', 'c4c386f517fe2742f0af265346eda5ee8725d172eeb74702b15addeacac41787b2449d7005bc12a1839b2fbb9dbd167c06117cc64cdf1c26d25b8c19ed5f7273'),
    },
    transfer: {
        token: {
            salt: env('TRANSFER_TOKEN_SALT', 'c4c386f517fe2742f0af265346eda5ee8725d172eeb74702b15addeacac41787b2449d7005bc12a1839b2fbb9dbd167c06117cc64cdf1c26d25b8c19ed5f7273'),
        },
    },
    secrets: {
        encryptionKey: env('ENCRYPTION_KEY', 'c4c386f517fe2742f0af265346eda5ee8725d172eeb74702b15addeacac41787b2449d7005bc12a1839b2fbb9dbd167c06117cc64cdf1c26d25b8c19ed5f7273'),
    },
    flags: {
        nps: env.bool('FLAG_NPS', true),
        promoteEE: env.bool('FLAG_PROMOTE_EE', true),
    },

    url: env('ADMIN_URL', 'https://nextlevel-strapi.onrender.com/'),

});