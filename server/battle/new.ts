import { Router } from 'express'

import Battle from './index.js'
import sendError from '../error/send.js'

const router = Router()

router.post('/battles', (_req, res) => {
	try {
		res.send(new Battle().code)
	} catch (error) {
		sendError(res, error)
	}
})

export default router
