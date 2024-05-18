<script lang="ts">
	export let name: string;
	export let image: string;
</script>

<div>
	<img src={image} alt={name} />
	<h3>{name}</h3>
</div>

<style lang="scss">
	div {
		width: 45%;
		margin: 0 auto;
		background-color: var(--header-color);

		img {
			width: 100%;
		}

		h3 {
			padding: 0.5rem 0.5rem;
			color: var(--header-font-color);
		}
	}
</style>
