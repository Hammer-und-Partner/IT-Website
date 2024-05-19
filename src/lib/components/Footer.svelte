<footer>
	<div class="center">
		<div class="address">
			<p>Außer der Schleifmühle 75</p>
			<p>28203 Bremen</p>
		</div>
		<div class="border"></div>
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

			.address,
			.contact {
				margin-left: 2rem;
				display: flex;
				flex-direction: column;
				justify-content: center;
			}

			.border {
				border-left: 1px solid var(--header-font-color); // Add border style
				height: calc(1rem * 2); // Set the height to match the parent div
				margin: 0 2rem; // Adjust the margin as needed
			}
		}

		// Styles for phones
		@media (max-width: 600px) {
			.center {
				flex-direction: column;

				.address,
				.contact {
					margin-left: 0;
				}

				.border {
					border-left: none;
					border-bottom: 1px solid var(--header-font-color); // Change border to bottom
					width: 80%; // Adjust width as needed
					height: 0; // No height needed for horizontal border
					margin: 1rem 0; // Adjust margin as needed
				}
			}
		}
	}
</style>
