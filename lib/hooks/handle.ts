import type { Handle } from '@sveltejs/kit'

import type Locals from '../data/locals.js'
import getContentSecurity from '../security/content.js'
import insertNonce from '../security/nonce/insert.js'

const handle: Handle<Locals, unknown> = async ({ request, resolve }) => {
	const response = await resolve(request)
	const { nonce, policy } = getContentSecurity()

	return {
		...response,
		headers: {
			'content-security-policy': policy,
			'cache-control': 'no-store',
			'expect-ct': '0',
			'referrer-policy': 'no-referrer',
			'strict-transport-security': 'max-age=15552000',
			'x-content-type-options': 'nosniff',
			'x-dns-prefetch-control': 'off',
			'x-download-options': 'noopen',
			'x-frame-options': 'SAMEORIGIN',
			'x-permitted-cross-domain-policies': 'none',
			'x-xss-protection': '0',
			...response.headers
		},
		body:
			typeof response.body === 'string'
				? insertNonce(response.body, nonce)
				: response.body
	}
}

export default handle
