import { nanoid } from 'nanoid'

export default class Battle {
	static battles: Record<string, Battle> = {}

	id = nanoid(10)

	constructor() {
		Battle.battles[this.id] = this
	}
}
