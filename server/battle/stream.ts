import Battle from './index.js'
import HttpError from '../../shared/error/http/index.js'
import HttpErrorCode from '../../shared/error/http/code.js'
import socket from '../socket/index.js'
import keepAlive from '../socket/alive.js'
import send from '../socket/send.js'
import closeWithError from '../error/close.js'

socket('/battles/:code', (socket, req) => {
	try {
		const { code } = req.params

		const name = req.query.get('name')?.trim()
		if (!name) throw new HttpError(HttpErrorCode.Socket, 'Invalid name')

		if (!Object.prototype.hasOwnProperty.call(Battle.battles, code))
			throw new HttpError(HttpErrorCode.Socket, 'Battle does not exist')

		const battle = Battle.battles[code]
		console.log(battle)

		keepAlive(socket)

		socket.on('message', (data, isBinary) => {
			try {
				const message: unknown = JSON.parse(
					data.toString(isBinary ? 'binary' : 'utf8')
				)

				send(socket, JSON.stringify(message)).catch(console.error)
			} catch (error) {
				closeWithError(socket, error)
			}
		})
	} catch (error) {
		closeWithError(socket, error)
	}
})
