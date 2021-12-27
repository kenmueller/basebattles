import { Router, Request } from 'express'

import type Locals from '../locals.js'
import ORIGIN from '../origin/index.js'
import RESERVED from './urls.js'
import sendError from '../error/send.js'

const router = Router()

router.use((req: Request & Locals, res, next) => {
	try {
		req.reserved = RESERVED.includes(new URL(req.url, ORIGIN).pathname)
		next()
	} catch (error) {
		sendError(res, error)
	}
})

export default router
