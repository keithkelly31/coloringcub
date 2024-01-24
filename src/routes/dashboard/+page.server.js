import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load({ locals: { getSession, supabase } }) {
    const session = await getSession();
    if(!session) throw redirect(307, "/signin");
    return { };
};