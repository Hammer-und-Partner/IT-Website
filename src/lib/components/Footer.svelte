<footer>
	<div class="inside">
		<div class="signet">
			<a href="/">
				<img
					src="https://hammer.partners/layout/app/images/logo-signet.6ec30218.svg"
					alt="Hammer &amp; Partner"
					width="55"
					height="56"
				/>
			</a>
		</div>
		<div class="contact">
			<div class="address">
				<p>Außer der Schleifmühle 75 <br /> 28203 Bremen</p>
			</div>
			<div class="numbers">
				Telefon: <a href="tel:49421369040">+49 421 369 04-0</a><br />Fax:
				<a href="tel:494213690420">+49 421 369 04-20</a>
			</div>
		</div>
		<div class="links">
			<div class="insides">
				<ul>
					<li class="first"><a href="/impressum">Impressum</a></li>
					<li class="second"><a href="/datenschutz">Datenschutz</a></li>
					<li class="last"><a href="mailto:info@it.hammer.partners">info@it.hammer.partners</a></li>
				</ul>
			</div>
		</div>
	</div>
</footer>

<style lang="scss">
	footer {
		@media (min-width: 768px) {
			font-size: 0.8rem;
		}

		background-color: #002b4d;
		color: #fff;
		font-weight: 400;
		position: relative;

		.inside {
			margin-left: auto;
			margin-right: auto;
			padding-left: 48px;
			padding-right: 48px;
			width: 100%;
			padding-bottom: calc(1.29rem + 0.51429vw);
			padding-top: calc(1.525rem + 3.53571vw);

			.signet {
				margin-bottom: 1.15rem;
				position: relative;
				text-align: center;
				z-index: 1;

				&::before {
					background-color: rgba(155, 186, 202, 0.16);
					content: '';
					height: 2px;
					left: 0;
					margin-top: -1px;
					position: absolute;
					right: 0;
					top: 50%;
					z-index: -1;
				}

				a {
					color: #406079;
					text-decoration: none;
					transition: color 0.3s;

					img {
						border-color: #002b4d;
						border-style: solid;
						border-width: 0 1.5rem;
						width: 5.75rem;

						height: auto;
						max-width: 100%;

						vertical-align: middle;

						aspect-ratio: auto 55 / 56;

						overflow-clip-margin: content-box;
						overflow: clip;
					}
				}
			}

			.contact {
				position: relative;

				@media (min-width: 576px) {
					--bs-gutter-x: 0.8rem;
					--bs-gutter-y: 0;
					display: flex;
					flex-wrap: wrap;
					margin-left: calc(var(--bs-gutter-x) * -0.5);
					margin-right: calc(var(--bs-gutter-x) * -0.5);
					margin-top: calc(var(--bs-gutter-y) * -1);
				}

				&:before {
					@media (min-width: 576px) {
						background-color: rgba(155, 186, 202, 0.16);
						bottom: 0;
						content: '';
						left: calc(50% - 1px);
						position: absolute;
						top: 0;
						width: 2px;
					}
				}

				.address {
					@media (min-width: 576px) {
						padding-right: 2.25rem;
						text-align: right;
					}
				}

				.numbers {
					@media (min-width: 576px) {
						padding-left: 2.25rem;
					}
				}

				@media (min-width: 576px) {
					.address,
					.numbers {
						flex-shrink: 0;
						flex: 0 0 auto;
						margin-top: var(--bs-gutter-y);
						max-width: 100%;
						padding-left: calc(var(--bs-gutter-x) * 0.5);
						padding-right: calc(var(--bs-gutter-x) * 0.5);
						width: 100%;
						width: 50%;
					}
				}
			}

			.links {
				font-size: 13px;
				margin-bottom: clamp(1rem, 2vw, 1.6rem);
				padding-bottom: 1.75rem;
				padding-top: 1.75rem;

				&:before {
					background-color: rgba(155, 186, 202, 0.16);
					content: '';
					height: 2px;
					left: 0;
					margin-top: -1px;
					position: absolute;
					top: 50%;
					width: 100%;
				}

				.insides {
					--bs-gutter-x: 2.4em;
					background: #002b4d;
					flex-wrap: wrap;
					justify-items: center;
					margin-left: calc(var(--bs-gutter-x) / -2);
					margin-right: calc(var(--bs-gutter-x) / -2);
					padding-left: 1.3em;
					padding-right: 1.3em;
					z-index: 1;
				}

				ul {
					--bs-gutter-x: 2.4em;
					display: flex;
					flex-wrap: wrap;
					justify-content: center;
					list-style: none;
					margin-bottom: 0;
					margin-left: calc(var(--bs-gutter-x) / -2);
					margin-right: calc(var(--bs-gutter-x) / -2);
					padding-left: 0;
					margin-top: 0;

					& > * {
						padding-left: calc(var(--bs-gutter-x) / 2);
						padding-right: calc(var(--bs-gutter-x) / 2);
					}
				}

				a {
					background: linear-gradient(90deg, currentColor 0, currentColor) 100% 1.3em / 0 1px
						no-repeat;
					color: #9dabb5;
					text-decoration: none;
					transition:
						background-size 0.9s cubic-bezier(0.19, 1, 0.22, 1),
						color 0.3s;

					&:focus,
					&:visited {
						color: #9dabb5;
					}
				}
			}

			.links,
			.insides {
				display: flex;
				justify-content: center;
				position: relative;
			}
		}
	}
</style>
