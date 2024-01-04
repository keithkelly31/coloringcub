import { redirects } from '$lib/config';
import { error, redirect } from '@sveltejs/kit';

/** @type {import('./$types').LayoutServerLoad} */
export async function load({ locals: { getSession, supabase } }) {
    const session = await getSession();
    if(!session) throw redirect(307, redirects.signedOut);

    const {data, error: err} = await supabase.from("profiles").select("*").eq("id", session.user.id).single();

    if(err) error(500, { message: err.message });

    return { user: data };
};