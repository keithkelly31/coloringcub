import { fail, redirect } from '@sveltejs/kit'

/** @type {import('./$types').PageServerLoad} */
export async function load({ locals: { getSession } }) {
    const session = await getSession()
    if(session) throw redirect(307, "/dashboard")
};

/** @type {import('./$types').Actions} */
export const actions = {
    default: async ({ locals: { supabase }, request }) => {
        const formData = await request.formData()
        const email = formData.get("email")
        const password = formData.get("password")
        const { error } = await supabase.auth.signInWithPassword({ email, password })
        if(error) return fail(400, { error: error.message })
        return { success: true }
    }
}