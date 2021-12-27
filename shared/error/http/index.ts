import type HttpErrorCode from './code.js'

export default class HttpError extends Error {
	constructor(public code: HttpErrorCode, message: string) {
		super(message)
	}
}
