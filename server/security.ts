import { Router } from 'express'

import ORIGIN from './origin/index.js'
import HttpError from '../shared/error/http/index.js'
import HttpErrorCode from '../shared/error/http/code.js'
import sendError from './error/send.js'

const router = Router()

router.use((req, res, next) => {
	try {
		const host = req.get('host')

		if (!host)
			throw new HttpError(HttpErrorCode.BadRequest, 'Unable to get host')

		const origin = new URL(req.url, `${req.protocol}://${host}`)
		if (origin.origin === ORIGIN.origin) return next()

		res.redirect(HttpErrorCode.PermanentRedirect, new URL(req.url, ORIGIN).href)
	} catch (error) {
		sendError(res, error)
	}
})

router.use((_req, res, next) => {
	try {
		res.header('access-control-allow-origin', ORIGIN.href)
		next()
	} catch (error) {
		sendError(res, error)
	}
})

export default router
