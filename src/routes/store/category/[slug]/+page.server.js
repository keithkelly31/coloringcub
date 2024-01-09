import categories from '$lib/categories';
import allProducts from '$lib/products';

/** @type {import('./$types').PageServerLoad} */
export async function load({ params}) {
    const category  = categories.find(c => c.slug === params.slug);
    const products = allProducts.filter(p => p.category === params.slug).sort((a, b) => a.name.localeCompare(b.name));

    return {
        category,
        products
    };
};