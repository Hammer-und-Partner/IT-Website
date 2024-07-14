<script lang="ts">
	import Menu from '$lib/components/Nav/Menu.svelte';
</script>

<nav>
	<ul>
		<li>
			<a href="/"><b>Hastratus</b></a>
		</li>
		<li>
			<div class="home-page">
				<a href="/demo" class="demo">Demo</a>
				<a href="/login" class="login">Login</a>
				<a href="/download" class="download">Download</a>
				<div class="menu">
					<Menu />
				</div>
			</div>
		</li>
	</ul>
</nav>

<style lang="scss">
	nav {
		background-color: #002b4d;
		color: #fff;
		padding-block: 1.25rem;
		background-color: #002b4d;
		box-shadow: 0 4px 4px rgba(0, 43, 77, 0.4);
		display: flex;
		justify-content: space-between;
		align-items: center;

		ul {
			list-style-type: none;
			display: flex;
			flex-wrap: wrap;
			justify-content: space-between;
			gap: 1.25rem;
			margin-right: 20px;
			margin-left: 20px;
			width: 100%;

			li {
				display: flex;
				flex-direction: row;

				.home-page {
					display: flex;
					flex-direction: row;

					.demo,
					.login,
					.download {
						margin-right: 1rem;
					}

					.demo,
					.login,
					.download {
						margin-right: 0.5rem;
						padding: 1px 4px;
						border: 1px solid #fff;
						border-radius: 0.25rem;
					}

					.menu {
						display: flex;
						justify-content: center;
						align-items: center;
					}

					a {
						align-content: center;
					}
				}
			}
		}
	}
</style>
