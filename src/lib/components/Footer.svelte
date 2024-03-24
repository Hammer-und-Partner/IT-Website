<footer>
	<div class="center">
		<div class="adress">
			<p>Außer der Schleifmühle 75</p>
			<p>28203 Bremen</p>
		</div>
		<div class="border"></div>
		<!-- Add a div with class "border" -->
		<div class="contact">
			<p>
				Telefon: <a href="tel:49421369040"> +49 421 369 04-0</a>
			</p>
			<p>
				Fax: <a href="tel:494213690420"> +49 421 369 04-20</a>
			</p>
		</div>
	</div>
</footer>

<style lang="scss">
	footer {
		background-color: var(--header-color);
		color: var(--header-font-color);
		box-shadow: 1px 1px 5px 2px var(--shadow-color);
		height: calc(124px + 1rem);

		display: flex;
		flex-direction: row;

		.center {
			margin: 0 auto;
			display: flex;
			flex-direction: row;
			justify-content: center;
			align-items: center;
			width: 100%;

			.adress {
				margin-left: 2rem;
				display: flex;
				flex-direction: column;
				justify-content: center;
			}

			.border {
				border-left: 1px solid var(--header-font-color); /* Add border style */
				height: calc(1rem * 2); /* Set the height to match the parent div */
				margin: 0 2rem; /* Adjust the margin as needed */
			}

			.contact {
				margin-left: 2rem;
				display: flex;
				flex-direction: column;
				justify-content: center;
			}
		}
	}
</style>
