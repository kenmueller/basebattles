<script lang="ts">
	import MetaImage from '../components/Meta/Image.svelte'
	import MetaTitle from '../components/Meta/Title.svelte'
	import MetaDescription from '../components/Meta/Description.svelte'
</script>

<MetaImage />
<MetaTitle value="Hello, world!" />
<MetaDescription value="Hello, world!" />

<main>
	<h1>Hello, world!</h1>
</main>

<style lang="scss">
	main {
		display: flex;
		height: 100%;
	}

	h1 {
		margin: auto;
		text-align: center;
	}
</style>
