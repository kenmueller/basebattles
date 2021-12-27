enum HttpErrorCode {
	PermanentRedirect = 301,
	TemporaryRedirect = 307,
	BadRequest = 400,
	NotFound = 404,
	Internal = 500,
	Socket = 1003,
	SocketInternal = 1011
}

export default HttpErrorCode
