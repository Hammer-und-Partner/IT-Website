<script>
	import Partner from './Partner.svelte';
</script>

<div class="ihre_partner">
	<h2>IHRE PARTNER</h2>
	<h3>WIR SIND FÜR SIE DA</h3>

	<div class="flex">
		<Partner name="Thorsten Hammer" image="/partner/thorsten_hammer.png"></Partner>
		<Partner name="Oliver Schumacher" image="/partner/oliver_schumacher.png"></Partner>
		<!-- <Partner name="Mathias Henke"></Partner> -->
	</div>
</div>

<style lang="scss">
	.flex {
		margin-top: 1rem;
		margin-left: calc(0.8rem * -0.5);
		margin-right: calc(0.8rem * -0.5);
		margin-top: calc(0 * -1);
		display: flex;
		flex-wrap: wrap;
	}
</style>
