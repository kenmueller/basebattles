<script lang="ts">
	export let value = '' // TODO: Default title
</script>

<svelte:head>
	<title>{value}</title>
	<meta property="og:title" content={value} />
	<meta name="twitter:title" content={value} />
</svelte:head>
