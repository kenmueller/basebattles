import fromEnvironment from '../environment/from.js'
import DEV from '../dev.js'
import PORT from '../port.js'

const DEV_ORIGIN = new URL(`http://localhost:${PORT}`)
const PRODUCTION_ORIGIN = new URL(fromEnvironment('VITE_ORIGIN'))

const ORIGIN = DEV ? DEV_ORIGIN : PRODUCTION_ORIGIN

export default ORIGIN
