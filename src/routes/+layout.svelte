<script lang="ts">
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';
	import '$lib/scss/app.scss';
</script>

<svelte:head>
	<title>Hammer partners IT GmbH</title>
</svelte:head>

<Header></Header>

<main>
	<div>
		<slot />
	</div>
</main>

<Footer></Footer>

<style lang="scss">
	main {
		max-width: 50rem;
		margin: 2.5rem auto;
	}
</style>
