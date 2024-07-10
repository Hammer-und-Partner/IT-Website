<script lang="ts">
	import Footer from '$lib/components/Footer.svelte';
	import Nav from '$lib/components/Nav/Nav.svelte';
	import '$lib/scss/app.scss';
</script>

<svelte:head>
	<title>Hastratus</title>
</svelte:head>

<Nav />

<main>
	<slot></slot>
</main>

<Footer />

<style lang="scss">
	main {
		margin-top: 2rem;
		margin-left: 2rem;
		margin-right: 2rem;
	}
</style>
