const fromEnvironment = (key: keyof ImportMetaEnv, fallback?: string) => {
	const value = import.meta.env[key] ?? fallback

	if (typeof value !== 'string')
		throw new Error(`Missing environment variable ${key}`)

	return value
}

export default fromEnvironment
