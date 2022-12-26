module.exports = [
  "strapi::errors",
  {
    name: "strapi::security",
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          "script-src": ["'self'", "https:", "editor.unlayer.com"],
          "frame-src": ["'self'", "https:", "editor.unlayer.com"],
          "connect-src": ["'self'", "https:"],
          "img-src": [
            "'self'",
            "https:",
            "data:",
            "blob:",
            "res.cloudinary.com",
            "cdn.jsdelivr.net",
            "strapi.io",
            "s3.amazonaws.com",
          ],
          "media-src": [
            "'self'",
            "https:",
            "data:",
            "blob:",
            "res.cloudinary.com",
          ],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  "strapi::cors",
  "strapi::poweredBy",
  "strapi::logger",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
];
