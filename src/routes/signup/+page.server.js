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

        const { count, error } = await supabase.from("profiles").select("*", { count: "exact" })
        if(error) return fail(400, { error: error.message })
        if(count !== 0) return fail(400, { error: "Email address has already been registered. Head over to the sign in page." })


        const { error: signUpError } = await supabase.auth.signUp({ email, password })
        if(signUpError) return fail(400, { error: signUpError.message })
        return { success: true }
    }
}