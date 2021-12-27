import type { RequestHandler } from '@sveltejs/kit'
import type { WebAppManifest } from 'web-app-manifest'

const manifest: WebAppManifest = {
	dir: 'ltr',
	lang: 'en-US',
	scope: '/',
	start_url: '/',
	name: '', // TODO: Name
	short_name: '', // TODO: Short name
	description: '', // TODO: Description
	display: 'standalone',
	theme_color: '', // TODO: Theme color
	background_color: '', // TODO: Background color
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
