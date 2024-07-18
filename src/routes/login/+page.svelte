<script lang="ts">
	import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons';
	import Fa from 'svelte-fa';

	let eye_icon = faEye;

	function togglePassword() {
		const passwordInput = document.getElementById('password_input') as HTMLInputElement;
		if (passwordInput.type === 'password') {
			passwordInput.type = 'text';
			eye_icon = faEyeSlash;
		} else {
			passwordInput.type = 'password';
			eye_icon = faEye;
		}
	}
</script>

<h1>Login</h1>

<div class="login">
	<form action="/login" method="POST">
		<label for="mandaten_nr">Mandanten Nr.</label>
		<input type="text" id="mandaten_nr" name="mandaten_nr" required />

		<label for="email">Email</label>
		<input type="email" id="email" name="email" required />

		<label for="password_input">Passwort</label>
		<div class="password-input">
			<input type="password" id="password_input" name="password" />
			<button
				on:click|preventDefault={togglePassword}
				aria-label="Show password in clear text"
				id="toggle_password"
				type="button"
				tabindex="-1"><Fa id="eye_icon" icon={eye_icon} /></button
			>
		</div>

		<button type="submit">Login</button>
	</form>
</div>

<style lang="scss">
	.login {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	form {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 50%;

		@media screen and (max-width: 768px) {
			width: 100%;
		}
	}

	label {
		margin-top: 1rem;
		width: 100%;
		text-align: left;
	}

	input {
		width: 100%;
		margin-top: 0.5rem;
		padding: 1rem;
	}

	button {
		padding: 1rem;
		margin: 1rem 0;
		background-color: #002b4d;
		color: #fff;
		width: 100%;
	}

	.password-input {
		position: relative;
		border-radius: var(--border-radius) !important;
		display: flex;
		align-items: right !important;
		width: 100% !important;

		input {
			width: 100%;
			padding-right: 2.5rem;
		}

		button {
			position: absolute;
			right: 0.5rem;
			background-color: transparent;
			border: none !important;
			cursor: pointer;
			padding: 0;
			margin: 0 !important;
			display: flex;
			align-items: center;
			justify-content: right;
			height: 100%;
			width: max-content !important;
			color: #000 !important;

			&:focus {
				outline: none !important;
				outline-offset: 0 !important;
			}
		}

		#eye_icon {
			font-size: 1rem;
		}
	}
</style>
