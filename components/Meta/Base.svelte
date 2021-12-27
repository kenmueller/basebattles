<script lang="ts">
	import { page } from '$app/stores'

	import ORIGIN from '../../lib/origin/index.js'

	$: url = new URL($page.path, ORIGIN)
</script>

<svelte:head>
	<link rel="canonical" href={url.href} />
	<link rel="manifest" href="/manifest.webmanifest" />

	<meta name="theme-color" content="" />
	<!-- <link rel="apple-touch-icon" href="" /> -->

	<meta property="og:url" content={url.href} />
	<meta property="og:site_name" content="" />
	<meta property="og:type" content="website" />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content="" />
	<meta name="twitter:creator" content="" />
	<meta name="twitter:domain" content={url.host} />
	<meta name="twitter:url" content={url.href} />
</svelte:head>
