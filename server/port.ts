import fromEnvironment from './environment/from.js'
import DEV from './dev.js'

const PORT = DEV ? '3000' : fromEnvironment('PORT')

export default PORT
