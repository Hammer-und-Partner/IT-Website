import { Actions, redirect } from '@sveltejs/kit';

export const actions: Actions = {
	default: async () => {
		throw redirect(303, '/dashboard');
	}
};
