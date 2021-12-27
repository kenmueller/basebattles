<script lang="ts">
	import Meta from '../components/Meta/Base.svelte'
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" />
	<link
		rel="stylesheet"
		href="https://fonts.googleapis.com/css2?family=Bangers&display=swap"
	/>
</svelte:head>

<Meta />
<slot />

<style lang="scss" global>
	*,
	::before,
	::after {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
		line-height: inherit;
		letter-spacing: 0.04em;
		font-family: inherit;
		font-size: inherit;
		color: inherit;
		border: none;
		outline: none;
	}

	html,
	body {
		height: 100%;
	}

	body {
		overflow: hidden;
		line-height: 1;
		font-family: Bangers, cursive;
		color: white;
		background: black;
	}

	button,
	[role='button'] {
		cursor: pointer;
	}

	button:disabled {
		cursor: default;
	}

	svg {
		display: block;
	}
</style>
