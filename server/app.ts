import compression from 'compression'

import DEV from './dev.js'
import { app } from './server.js'
import skipReserved from './reserved/skip.js'

import security from './security.js'
import reserved from './reserved/index.js'
import hello from './test/hello.js'

const handlers = [hello] // TODO: Routes

if (!DEV) app.use(compression({ threshold: 0 }))

app.use(security, reserved)
app.use(handlers.map(skipReserved))

export default app
