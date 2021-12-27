import type WebSocket from 'ws'

const close = (socket: WebSocket) => {
	try {
		socket.close()
	} catch (error) {
		console.error('Attempted to close socket', error)
	}
}

export default close
