import WebSocket, { WebSocketServer } from 'ws'
import type { IncomingMessage } from 'http'
import type { Socket } from 'net'
import Pattern from 'url-pattern'

import server from './server.js'
import ORIGIN from './origin/index.js'
import DEFAULT_RESERVED from './reserved/urls.js'
import HttpError from '../shared/error/http/index.js'
import HttpErrorCode from '../shared/error/http/code.js'

type URLParams = Record<string, string>

export interface SocketRequest extends IncomingMessage {
	params: URLParams
	query: URLSearchParams
}

export type SocketListener = (socket: WebSocket, req: SocketRequest) => void

const RESERVED = ['/', ...DEFAULT_RESERVED]

const socketServers = new Map<Pattern, WebSocketServer>()

const socket = (path: string, listener: SocketListener) => {
	const socketServer = new WebSocketServer({ noServer: true })
	socketServer.on('connection', listener)

	socketServers.set(new Pattern(path), socketServer)
}

const upgrade = async (req: SocketRequest, socket: Socket, head: Buffer) => {
	try {
		const origin = new URL(req.url ?? '', req.headers.origin)

		if (origin.origin !== ORIGIN.origin)
			throw new HttpError(HttpErrorCode.Socket, 'Invalid origin')

		if (RESERVED.includes(origin.pathname)) return

		for (const [pattern, socketServer] of socketServers) {
			const params = pattern.match(origin.pathname) as URLParams | null
			if (!params) continue

			req.params = params
			req.query = origin.searchParams

			const client = await new Promise<WebSocket>(resolve => {
				socketServer.handleUpgrade(req, socket, head, resolve)
			})

			socketServer.emit('connection', client, req)
			return
		}

		throw new HttpError(HttpErrorCode.Socket, 'No matching paths')
	} catch (error) {
		console.error('Attempted to handle upgrade request', error)
		socket.destroy(error instanceof Error ? error : undefined)
	}
}

server.on('upgrade', (req, socket, head) => {
	upgrade(req as SocketRequest, socket as Socket, head).catch(error => {
		console.error('Failed upgrade request', error)
	})
})

export default socket
