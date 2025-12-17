export default [
  'strapi::logger',
  'strapi::errors',

  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': ["'self'", 'https:'],
          'img-src': [
            "'self'",
            'data:',
            'blob:',
            'https://market-assets.strapi.io',
            'https://console.cloudinary.com',
            'https://res.cloudinary.com',
          ],
          'script-src': [
            "'self'",
            'https://media-library.cloudinary.com',
            'https://upload-widget.cloudinary.com',
            'https://console.cloudinary.com',
          ],
          'media-src': [
            "'self'",
            'data:',
            'blob:',
            'https://console.cloudinary.com',
            'https://res.cloudinary.com',
          ],
          'frame-src': [
            "'self'",
            'https://media-library.cloudinary.com',
            'https://upload-widget.cloudinary.com',
            'https://console.cloudinary.com',
          ],
          upgradeInsecureRequests: null,
        },
      },
    },
  },

  // ✅ Move CORS up (before query/body/public)
  {
    name: 'strapi::cors',
    config: {
      enabled: true,
      origin: [
        'http://localhost:3000',
        'https://nextlevel-m5ho.onrender.com',
        'https://nextlevel-1-3xou.onrender.com',
        'https://nextlevel-backend-0dmg.onrender.com',
        '/',
        'https://nextlevel-backend-ktga.vercel.app',
        // optional if calling from backend
      ],
      headers: ['Content-Type', 'Authorization', 'Origin', 'Accept'],
      methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
      keepHeaderOnError: true,
    },
  },

  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
