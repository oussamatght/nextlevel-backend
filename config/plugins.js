module.exports = ({ env }) => ({
    upload: {
        config: {
            provider: 'cloudinary',
            providerOptions: {
                cloud_name: env('CLOUDINARY_NAME'),
                api_key: env('CLOUDINARY_API_KEY'),
                api_secret: env('CLOUDINARY_API_SECRET'),
            },
            actionOptions: {
                upload: {},
                delete: {},
            },
        },
    },
    'users-permissions': {
        config: {
            // Either use environment variable or hardcode the secret
            jwtSecret: env('JWT_SECRET', '6920dc8a103869af4d14fbacd1119ede919b61c4a6015785c5e49c858780471b7b9be09de87077ecc28724622001f8f16cdb117664fdce6d0f0ee9d0d52ff22748156e6fb2046b0fef9e92922452bfd580a796b9ecf30b44e92f4e0dd03f337530c1e346d8835c15c9839afa8235627a5b6c3ea6f46db9f70ca511d0353af47e'),
        },
    },
});
