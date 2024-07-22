// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css', '~/assets/css/swiper-bundle.min.css', '~/assets/css/animate.css', '~/assets/css/tailwind.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  plugins: ['~/plugins/wow.client.ts', '~/plugins/swiper.client.ts', '~/plugins/main.client.ts'],
  app: {
    head: {
      title: 'Play Tailwind',
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      link: [{ rel: 'shortcut icon', type: 'image/x-icon', href: '/images/favicon.png' }],
    }
  },
})
