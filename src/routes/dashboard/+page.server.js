import { redirects } from "$lib/config";
import { redirect } from "@sveltejs/kit";

/** @type { import("./$types").PageServerLoad } */
export const load = async ({ locals: { getSession, supabase } }) => {
    const session = await getSession()

    if (!session) {
        throw redirect(303, redirects.signedOut);
    }

    const { data, error } = await supabase.from("profiles").select("email_opt_out").eq("id", session.user.id).single();

    // TODO: Handle error
    if(error) {
        
    }

    return { settings: data };
}