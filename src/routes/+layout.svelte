<script lang="ts">
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';
	import '$lib/scss/app.scss';
</script>

<svelte:head>
	<title>Hammer partners IT GmbH</title>
</svelte:head>

<Header></Header>

<slot />

<Footer></Footer>
