import type { RequestHandler, Request } from 'express'
import conditional from 'express-conditional-middleware'

import type Locals from '../locals.js'

const skipReserved = (handler: RequestHandler) =>
	conditional((req: Request & Locals) => req.reserved === false, handler)

export default skipReserved
