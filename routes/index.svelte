<script lang="ts">
	import { goto } from '$app/navigation'

	import HttpError from '../shared/error/http/index.js'
	import handleError from '../lib/error/handle.js'
	import MetaImage from '../components/Meta/Image.svelte'
	import MetaTitle from '../components/Meta/Title.svelte'
	import MetaDescription from '../components/Meta/Description.svelte'

	let loading = false

	const newBattle = async () => {
		try {
			if (loading) return
			loading = true

			const response = await fetch('/battles', { method: 'POST' })
			if (!response.ok) throw await HttpError.fromResponse(response)

			await goto(`/${await response.text()}`)
		} catch (error) {
			loading = false
			handleError(error)
		}
	}
</script>

<MetaImage />
<MetaTitle />
<MetaDescription />

<main>
	<nav>
		<h1>Base Battles</h1>
	</nav>
	<button on:click={newBattle} aria-busy={loading || undefined}>
		New Battle
	</button>
</main>

<style lang="scss">
	main {
		display: grid;
		grid: auto 1fr / 1fr;
		height: 100%;
	}

	nav {
		display: flex;
		align-items: center;
		padding: 1rem 2rem;
	}

	h1 {
		font-size: 4rem;
	}

	button {
		font-size: 2rem;
		margin: auto;
		padding: 1rem 2rem;
		background: rgba(#007aff, 0.5);
		border-radius: 0.7rem;
		transition: opacity 0.3s;

		&:hover {
			opacity: 0.7;
		}
	}

	[aria-busy] {
		pointer-events: none;
	}
</style>
