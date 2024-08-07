<script lang="ts">
	import {
		faBars,
		faDesktop,
		faDownload,
		faHouse,
		faSignInAlt
	} from '@fortawesome/free-solid-svg-icons';
	import Fa from 'svelte-fa';

	export let open = false;

	function toggleDropdown() {
		open = !open;
	}

	function closeDropdown() {
		open = false;
	}
</script>

<div class=".dropdown">
	<button aria-label="Open Menu" class="dropdown-button" on:click|stopPropagation={toggleDropdown}>
		<Fa icon={faBars} />
	</button>
</div>
{#if open}
	<div class="blurry-brackground"></div>
	<div class="dropdown-content">
		<button class="close-button" on:click={closeDropdown}>x</button>
		<div class="row home">
			<a href="/" class="link"><span><Fa icon={faHouse}></Fa></span>Home</a>
			<a href="https://dashboard.it.hammer.partners" class="link"
				><span><Fa icon={faDesktop}></Fa></span>Demo</a
			>
			<a href="/login" class="link"><span><Fa icon={faSignInAlt}></Fa></span>Login</a>
			<a href="/download" class="link"><span><Fa icon={faDownload}></Fa></span>Download</a>
		</div>
		<div class="row copyright">
			<p>© 2024 Hammer partners IT GmbH</p>
		</div>
	</div>
{/if}

<style lang="scss">
	.dropdown {
		position: relative;
		display: inline-block;
	}

	button {
		width: max-content;
		height: max-content;
		padding: 0 1rem;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		position: relative;
		background-color: var(--nav-color) !important;
		border: none !important;
		box-shadow: none !important;
		color: #fff !important;
	}

	.blurry-background {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(110, 118, 129, 0.4);
		opacity: 50%;
		z-index: 998;
		display: block;
	}

	.dropdown-content {
		position: absolute;
		position: fixed;
		z-index: 999;
		display: block;
		right: 0;
		top: 0;
		left: auto;

		@keyframes slide-in {
			from {
				transform: translateX(100%);
				opacity: 0;
			}

			to {
				transform: translateX(0);
				opacity: 1;
			}
		}

		animation: slide-in var(--animation-time) forwards;

		font-size: var(--small-font);

		box-shadow: 0px 0px 10px var(--shadow-color);

		background-color: #002b4d;

		height: 100%;
		overflow-y: auto;

		max-width: 320px;
		text-align: left;

		border: 2px solid #fff;
		border-right: none;
		border-top-left-radius: calc(0.25rem * 3);
		border-bottom-left-radius: calc(0.25rem * 3);

		a,
		.link {
			text-decoration: none;

			span {
				margin-right: 0.5rem;
			}
		}

		p {
			margin: 0;
		}

		.link {
			width: max-content !important;
			color: inherit !important;
			text-underline-offset: 0.2rem !important;
			outline: none !important;
			margin-bottom: 0 !important;

			display: flex;
			flex-direction: row;

			&:hover,
			&:focus {
				color: #426d8e !important;
				cursor: pointer;

				:global(svg) {
					color: #426d8e !important;
				}
			}

			span {
				margin-right: 0.5rem;
			}

			:global(svg):hover {
				color: #426d8e !important;
			}
		}

		.underline {
			text-decoration: underline !important;
		}

		.close-button {
			margin: 10px;

			&:hover {
				background-color: var(--label-color);
			}
		}

		.border-bottom {
			border-bottom: 2px solid var(--border-color);
		}

		.row {
			display: flex;
			flex-direction: column;
			padding-right: 30px;
			padding-left: 15px;
		}

		.home,
		.external-links,
		.copyright,
		.logout,
		.internal-links,
		.logged-out,
		.logged-in {
			padding-top: 10px;
			padding-bottom: 10px;
		}
	}
</style>
