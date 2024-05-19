<script lang="ts">
	import { base } from '$app/paths';

	export let name: string;
	export let image: string;
</script>

<div>
	<img src="{base}{image}" alt={name} />
	<h3>{name}</h3>
</div>

<style lang="scss">
	div {
		width: 45%;
		background-color: var(--header-color);

		img {
			width: 100%;
		}

		h3 {
			padding: 0.5rem 0.5rem;
			color: var(--header-font-color);
		}
	}

	@media (max-width: 600px) {
		div {
			width: 90vw;
			background-color: var(--header-color);

			img {
				width: 90vw;
			}

			h3 {
				padding: 0.5rem 0.5rem;
				color: var(--header-font-color);
			}
		}
	}
</style>
