// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss"],
  app: {
    head: {
		link: [
			{ rel: 'preconnect', href: 'https://fonts.googleapis.com'},
			{ rel: 'preconnect', href: 'https://fonts.gstatic.com'},
			{ rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600&display=swap' },
		]
	}
  }
})
