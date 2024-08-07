import { Actions, redirect } from '@sveltejs/kit';
import { PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {
	throw redirect(301, "https://dashboard.it.hammer.partners/Login")
};

export const actions: Actions = {
	default: async () => {
		throw redirect(303, '/dashboard');
	}
};
