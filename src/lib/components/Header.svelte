<header>
	<a href="https://hammer.partners/">
		<img src="/logo.png" alt="Hammer & Partner Logo" />
	</a>

	<div class="title">
		<h1>Hammer partners IT GmbH</h1>
		<small>IT Diesntleistungen</small>
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

		a {
			margin-bottom: 0.5rem;

			img {
				padding: 1rem;
			}
		}

		.title {
			margin-left: 2rem;
			display: flex;
			flex-direction: column;
			justify-content: center;
		}
	}
</style>
