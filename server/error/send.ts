import type { Response } from 'express'

import HttpError from '../../shared/error/http/index.js'
import HttpErrorCode from '../../shared/error/http/code.js'
import DEFAULT_ERROR from '../../shared/error/default.js'

const sendError = (res: Response, error: unknown) => {
	try {
		res
			.status(error instanceof HttpError ? error.code : HttpErrorCode.Internal)
			.send(error instanceof Error ? error.message : DEFAULT_ERROR)
	} catch (error) {
		console.error('Attempted to send error', error)
	}
}

export default sendError
