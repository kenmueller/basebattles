import compression from 'compression'

import DEV from './dev.js'
import { app } from './server.js'
import skipReserved from './reserved/skip.js'

import security from './security.js'
import reserved from './reserved/index.js'
import newBattle from './battle/new.js'

import './battle/stream.js'

const handlers = [newBattle]

if (!DEV) app.use(compression({ threshold: 0 }))

app.use(security, reserved)
app.use(handlers.map(skipReserved))

export default app
