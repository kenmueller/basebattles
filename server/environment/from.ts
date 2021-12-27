const fromEnvironment = (key: keyof NodeJS.ProcessEnv, fallback?: string) => {
	const value = process.env[key] ?? fallback

	if (typeof value !== 'string')
		throw new Error(`Missing environment variable ${key}`)

	return value
}

export default fromEnvironment
