<script>
	import Partner from './Partner.svelte';
</script>

<div class="ihre_partner">
	<h2>IHRE PARTNER</h2>
	<h3>WIR SIND FÜR SIE DA</h3>

	<div class="flex">
		<Partner name="Thorsten Hammer" image="/partner/thorsten_hammer.png" />
		<Partner name="Oliver Schumacher" image="/partner/oliver_schumacher.png" />
		<Partner name="Mathias Henke" image="/partner/oliver_schumacher.png" />
	</div>
</div>

<style lang="scss">
	.flex {
		margin-top: 1rem !important;
		margin-left: calc(0.8rem * -0.5);
		margin-right: calc(0.8rem * -0.5);
		display: flex;
		flex-wrap: wrap;
		justify-content: flex-start; // Ensure items are aligned to the start
		gap: 1rem; // Add gap between items

		& > * {
			flex: 1 1 calc(50% - 1rem); // Allow two items per row with a gap
			max-width: 460px; // Set a maximum width for each item
			box-sizing: border-box; // Include padding and border in width calculation
		}
	}

	@media (max-width: 600px) {
		.flex {
			flex-direction: column;
			align-items: center; // Center items in a column

			& > * {
				flex: 1 1 auto; // Allow flexible sizing
				max-width: 100%; // Use full width on small screens
			}
		}
	}
</style>
