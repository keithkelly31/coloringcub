import categories from '$lib/categories';
import allProducts from '$lib/products';

/** @type {import('./$types').PageServerLoad} */
export async function load({ params, locals: { supabase }}) {
    const category  = categories.find(c => c.slug === params.slug);
    const filterProducts = allProducts.filter(p => p.category === params.slug).sort((a, b) => a.name.localeCompare(b.name));
    const products = filterProducts.map(p => {
        const src = supabase.storage.from("products").getPublicUrl(p.image, {
            transform: {
                quality: 50,
                resize: "contain",
                width: 600,
            }
        })
        p.src = src.data.publicUrl;
        return p;
    })

    return {
        category,
        products
    };
};