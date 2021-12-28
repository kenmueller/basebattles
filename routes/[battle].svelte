<script lang="ts">
	import { browser } from '$app/env'
	import { page } from '$app/stores'

	import SOCKET_ORIGIN from '../lib/origin/socket.js'

	$: code = $page.params.battle

	$: if (browser) {
		let socket: WebSocket | null = new WebSocket(
			new URL(
				`battles/${encodeURIComponent(code)}?name=${encodeURIComponent('ken')}`,
				SOCKET_ORIGIN
			)
		)

		socket.addEventListener('open', () => {
			socket?.send(JSON.stringify('hello'))
		})

		socket.addEventListener('message', ({ data }) => {
			console.log(JSON.parse(data))
		})

		socket.addEventListener('close', () => {
			socket = null
		})
	}
</script>

<h1>{$page.params.battle}</h1>
