import { getCSP, SELF, INLINE, nonce as nonceString } from 'csp-header'

import { dev } from '$app/env'

import SOCKET_ORIGIN from '../origin/socket.js'
import getNonce from './nonce/get.js'

export interface ContentSecurity {
	nonce: string
	policy: string
}

const getContentSecurity = (): ContentSecurity => {
	const nonce = getNonce()

	return {
		nonce,
		policy: getCSP({
			directives: {
				'default-src': [SELF],
				'connect-src': [SELF, SOCKET_ORIGIN.href],
				'style-src': [SELF, ...(dev ? [INLINE] : [])],
				'script-src': [
					SELF,
					nonceString(nonce),
					"'sha256-cXOZe05CqZ4xvGscU85F4K+8OEag6anwgMUZSpWB/WA='" // Service worker
				],
				'base-uri': [SELF],
				'upgrade-insecure-requests': !dev
			}
		})
	}
}

export default getContentSecurity
