import { fail } from '@sveltejs/kit';

/** @type {import('./$types').Actions} */
export const actions = {
	default: async ({ request, locals: { supabase } }) => {
    const formData = await request.formData();
    const email = formData.get("email")?.toString();

    const { error } = await supabase.auth.signInWithOtp({ email,
      options: {
        emailRedirectTo: `${new URL(request.url).origin}/dashboard`
      }
    } );

    if(error) {
      return fail(400, { message: error.message });
    }

		return { message: `An email has been sent to ${email}. That email will have a link to complete the process. You can safely close this browser tab.` };
	}
};