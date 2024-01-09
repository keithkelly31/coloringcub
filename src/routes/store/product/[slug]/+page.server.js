import products from '$lib/products';

/** @type {import('./$types').PageServerLoad} */
export async function load({params}) {
    const product = products.filter(p => p.slug === params.slug)[0]
    return { product };
};