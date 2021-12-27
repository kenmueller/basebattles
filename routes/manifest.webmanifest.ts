import type { RequestHandler } from '@sveltejs/kit'
import type { WebAppManifest } from 'web-app-manifest'

const manifest: WebAppManifest = {
	dir: 'ltr',
	lang: 'en-US',
	scope: '/',
	start_url: '/',
	name: 'Base Battles',
	short_name: 'Battles',
	description: 'Base Battles',
	display: 'standalone',
	theme_color: 'black',
	background_color: 'black',
	categories: [], // TODO: Categories
	icons: [] // TODO: Icons
}

let data: string | null = null

export const get: RequestHandler = () => ({
	headers: {
		'cache-control': 'no-cache',
		'content-type': 'application/manifest+json'
	},
	body: (data ??= JSON.stringify(manifest))
})
