export const environment = {
  production: true,
  baseUrl: 'http://localhost:8080/',
  mock: {
    all: false,
    enable: false,
    services: {
      users: false,
      cats: false,
    },
  },
  defaultLang: 'en',
  lang: ['en', 'fr', 'nl'],
  langNames: ['English', 'Français', 'Nederlands'],
};
