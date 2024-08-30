// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [[
    '@pinia/nuxt',
    {
      autoImports: ['defineStore', 'acceptHMRUpdate']
    }],

    '@nuxtjs/tailwindcss',
    '@vee-validate/nuxt',
    'nuxt-icon'
  ],
  tailwindcss: {
    config: {
      theme: {
        extend: {
        },
      },
      plugins: [
        require('daisyui'),
      ],
    },
  },
});

