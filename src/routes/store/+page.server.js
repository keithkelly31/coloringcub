import rawCategories from "$lib/categories";

/** @type {import('./$types').PageServerLoad} */
export async function load({ locals: {supabase} }) {
  const categories = rawCategories.sort((a, b) => a.name.localeCompare(b.name)).map(c => {
      const src = supabase.storage.from("site_assets").getPublicUrl(c.image, {
          transform: {
              quality: 50,
              resize: "contain",
              width: 600,
          }
      })
      c.src = src.data.publicUrl;
      return c;
  })
  return { categories };
};