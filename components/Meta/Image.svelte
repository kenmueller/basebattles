<script lang="ts">
	export let icon = '' // TODO: Default favicon
	export let value = '' // TODO: Default opengraph image
</script>

<svelte:head>
	<link rel="icon" href={icon} />

	<meta property="og:image" content={value} />
	<meta name="twitter:image" content={value} />
</svelte:head>
