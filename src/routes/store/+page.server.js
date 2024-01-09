import categories from "$lib/categories";

/** @type {import('./$types').PageServerLoad} */
export async function load() {
  return { categories };
};