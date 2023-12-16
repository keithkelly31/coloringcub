import { redirects } from "$lib/config";
import { redirect } from "@sveltejs/kit";

/** @type { import("./$types").LayoutServerLoad } */
export const load = async ({ locals: { getSession } }) => {
    const session = await getSession()

    if (!session) {
        throw redirect(303, redirects.signedOut);
    }

    return {};
}