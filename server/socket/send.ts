import type WebSocket from 'ws'

const send = <Data>(socket: WebSocket, data: Data) =>
	new Promise<void>((resolve, reject) => {
		socket.send(data, error => {
			error ? reject(error) : resolve()
		})
	})

export default send
