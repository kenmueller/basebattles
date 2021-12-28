import { nanoid } from 'nanoid'

export default class Battle {
	static battles: Record<string, Battle> = {}

	code = nanoid(10)

	constructor() {
		Battle.battles[this.code] = this
	}
}
