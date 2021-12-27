<script lang="ts">
	import Meta from '../components/Meta/Base.svelte'
</script>

<Meta />
<slot />

<style lang="scss" global>
	*,
	::before,
	::after {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
		font-family: inherit;
		font-size: inherit;
		font-weight: inherit;
		border: none;
		outline: none;
	}

	html,
	body {
		height: 100%;
	}

	body {
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
			Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	}

	button,
	[role='button'] {
		cursor: pointer;
	}

	button:disabled {
		cursor: default;
	}
</style>
