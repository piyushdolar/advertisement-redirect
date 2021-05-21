import colors from 'vuetify/es5/util/colors'

export default {
	// Global page headers: https://go.nuxtjs.dev/config-head
	head: {
		titleTemplate: '%s - 999.money',
		title: 'Create your own ads system',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: '' }
		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
		]
	},

	// Global CSS: https://go.nuxtjs.dev/config-css
	css: [
	],

	// Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
	plugins: [
	],

	// Auto import components: https://go.nuxtjs.dev/config-components
	components: true,

	// Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
	ssr: false,
	telemetry: false,

	// Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
	buildModules: [
		// https://go.nuxtjs.dev/vuetify
		['@nuxtjs/vuetify', {
			customVariables: ['~/assets/variables.scss'],
			theme: {
				dark: false,
				themes: {
					dark: {
						primary: colors.blue.darken2,
						accent: colors.grey.darken3,
						secondary: colors.amber.darken3,
						info: colors.teal.lighten1,
						warning: colors.amber.base,
						error: colors.deepOrange.accent4,
						success: colors.green.accent3
					}
				}
			}
		}],
	],

	// Modules: https://go.nuxtjs.dev/config-modules
	modules: [
		// https://go.nuxtjs.dev/axios
		['@nuxtjs/axios', {
			baseURL: 'http://app.999.money/api/',
			https: true,
			debug: process.env.NODE_ENV == "development" ? true : false,
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json"
			}
		}],

		// https://go.nuxtjs.dev/pwa
		['@nuxtjs/pwa', {
			manifest: {
				lang: 'en'
			},
		}],

		// https://go.nuxtjs.dev/content
		'@nuxt/content',

		// https://sentry.nuxtjs.org/guide/setup
		['@nuxtjs/sentry', {
			dsn: 'https://a8490a1f45c84a12ab141c52f90ff578@o507839.ingest.sentry.io/5762491', // Enter your project's DSN here
			// Additional Module Options go here
			// https://sentry.nuxtjs.org/sentry/options
			config: {
				environment: process.env.NODE_ENV == "development" ? 'development' : 'production'
			},
			lazy: true,
			tracing: true
		}],

		// https://www.npmjs.com/package/nuxt-user-agent
		"nuxt-user-agent",
	],

	// Content module configuration: https://go.nuxtjs.dev/config-content
	content: {},

	// Build Configuration: https://go.nuxtjs.dev/config-build
	build: {
		optimization: {
			splitChunks: {
				cacheGroups: {
					styles: {
						name: 'styles',
						test: /\.(css|vue)$/,
						chunks: 'all',
						enforce: true
					}
				}
			}
		}
	}
}
