// https://github.com/nuxt-themes/docus/blob/main/nuxt.schema.ts
export default defineAppConfig({
	docus: {
		title: 'GM-I18n',
		description: 'A powerful, open-source internationalization (i18n) library for GameMaker 2.3+',
		image: 'https://ik.imagekit.io/undervolta/Library-1-Banner-2-1.webp?updatedAt=1748179337886',
		socials: {
			twitter: 'undervolta',
			facebook: 'undervolta',
			youtube: 'undervolta',
			github: 'undervolta/GM-I18n'
		},
		/*github: {
			dir: './content',
			branch: 'main',
			repo: 'gm-i18n-docs',
			owner: 'undervolta',
			edit: true
		},*/
		aside: {
			level: 0,
			collapsed: false,
			exclude: []
		},
		main: {
			padded: true,
			fluid: true
		},
		header: {
			logo: true,
			showLinkIcon: true,
			exclude: [],
			fluid: true
		}
	}
})
