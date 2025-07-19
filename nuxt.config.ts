export default defineNuxtConfig({
	// https://github.com/nuxt-themes/docus
	extends: ['@nuxt-themes/docus'],
	devtools: { enabled: true },

	modules: [
		// https://github.com/nuxt-modules/plausible
		// '@nuxtjs/plausible'
	],
	compatibilityDate: '2024-10-24',
	typescript: {
		tsConfig: {
			compilerOptions: {
				verbatimModuleSyntax: false
			}
		}
	},
	
})

