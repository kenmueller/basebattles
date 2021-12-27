import { Router } from 'express'

import Battle from './index.js'

const router = Router()

router.post('/battles', (_req, res) => {
	res.send(new Battle().id)
})

export default router
