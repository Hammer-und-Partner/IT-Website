<script lang="ts">
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

<!--Footer-->
