import products from '$lib/products';

/** @type {import('./$types').PageServerLoad} */
export async function load({params, locals: {supabase}}) {
    let product = products.filter(p => p.slug === params.slug)[0]
    const src = supabase.storage.from("products").getPublicUrl(product.image, {
        transform: {
            quality: 70,
            resize: "contain",
            width: 850,
        }
    }) 
    product.src = src.data.publicUrl
   
    return { product };
};