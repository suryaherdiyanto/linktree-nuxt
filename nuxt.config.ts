// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  colorMode: {
	preference: 'light'
  },
  modules: ["@nuxt/ui"],
  app: {
    head: {
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com'},
        { rel: 'preconnect', href: 'https://fonts.gstatic.com'},
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,300;1,9..40,400&display=swap' },
      ],
      bodyAttrs: {
        class: 'bg-gray-200'
      }
	  },
  }
})
