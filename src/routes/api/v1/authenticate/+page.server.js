import { fail } from '@sveltejs/kit';

/** @type {import('./$types').Actions} */
export const actions = {
	default: async ({ request, locals: { supabase } }) => {
    const formData = await request.formData();
    const email = formData.get("email")?.toString();
    const first_name = formData.get("first_name")?.toString();
    const signin = formData.get("signin")?.toString();

   if(signin) {
    const { count, error } = await supabase.from("profiles").select("*", { count: "exact", head: true }).eq("email", email);
    if(error) {
      return fail(500, error.message);
    }

    if(count === 0) {
      return fail(404, { message: "The email address entered does not exist in or system." });
    }
   }

    const { error } = await supabase.auth.signInWithOtp({ email, options: { data: { first_name } } } );

    if(error) {
      return fail(500, { message: error.message });
    }

		return { message: `An email has been sent to ${email}. That email will have a link to complete the process. You can safely close this browser tab.` };
	}
};