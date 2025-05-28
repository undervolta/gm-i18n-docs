// https://github.com/nuxt-themes/docus/blob/main/nuxt.schema.ts
export default defineAppConfig({
	docus: {
		title: 'GM-I18n',
		description: 'A powerful, open-source internationalization (i18n) library for GameMaker 2.3+',
		image: '/img/banner.webp',
		socials: {
			twitter: 'undervolta',
			facebook: 'undervolta',
			youtube: '@undervolta',
			github: 'undervolta/GM-I18n'
		},
		github: {
			dir: 'content',
			branch: 'master',
			repo: 'gm-i18n-docs',
			owner: 'undervolta',
			edit: true
		},
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
		},
		footer: {
			credits: {
				icon: 'IconDocus',
				text: 'Powered by Docus',
				href: 'https://docus.dev',
				target: '_blank',
				rel: 'noopener'
			},
			textLinks: [
				{
					text: 'GM-I18n v0.1.0',
					href: 'https://gm-i18n.lefinitas.com',
					rel: 'noopener'
				}
			],
		},
		colorMode: {
            preference: 'system', 
            fallback: 'dark', 
            hue: 270 
        },
		search: {
            provider: 'local',
            options: {
                fuseOptions: {
                    keys: ['title', 'description', 'headers', 'content'],
                    threshold: 0.2
                }
            }
        }
	}
})
