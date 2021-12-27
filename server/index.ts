import type { RequestHandler } from 'express'

import PORT from './port.js'
import server from './server.js'
import app from './app.js'

import {
	assetsMiddleware,
	prerenderedMiddleware,
	kitMiddleware
	// @ts-ignore
} from '../../build/middlewares.js'

const handlers = [
	assetsMiddleware,
	prerenderedMiddleware,
	kitMiddleware
] as RequestHandler[]

app.enable('trust proxy')
app.disable('x-powered-by')

app.use(handlers)

server.listen(PORT)
