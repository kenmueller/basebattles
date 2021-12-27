import type WebSocket from 'ws'

import HttpError from '../../shared/error/http/index.js'
import HttpErrorCode from '../../shared/error/http/code.js'
import DEFAULT_ERROR from '../../shared/error/default.js'

const closeWithError = (socket: WebSocket, error: unknown) => {
	try {
		socket.close(
			error instanceof HttpError ? error.code : HttpErrorCode.SocketInternal,
			error instanceof Error ? error.message : DEFAULT_ERROR
		)
	} catch (error) {
		console.error('Attempted to close socket with error', error)
	}
}

export default closeWithError
