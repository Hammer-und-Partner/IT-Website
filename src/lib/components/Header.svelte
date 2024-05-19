<header>
	<div class="title">
		<h1>Hammer partners IT GmbH</h1>
		<small>
			<span class="text-part">IT Dienstleistungen</span>
			<span class="dot">·</span>
			<span class="text-part">Ein Unternehmen von Hammer & Partner</span>
		</small>
	</div>
</header>

<style lang="scss">
	header {
		background-color: var(--header-color);
		color: var(--header-font-color);
		box-shadow: 1px 1px 5px 2px var(--shadow-color);
		height: calc(124px + 1rem);

		display: flex;
		flex-direction: row;

		.title {
			margin-left: 2rem;
			display: flex;
			flex-direction: column;
			justify-content: center;

			.text-part {
				display: inline;
			}

			.dot {
				display: inline;
			}

			@media (max-width: 600px) {
				.text-part {
					display: block; /* This makes each part take the full width, causing a line break */
				}

				.dot {
					display: none; /* This hides the dot */
				}
			}
		}
	}
</style>
