
/** @type {import('./$types').PageServerLoad} */
export async function load({locals: {supabase}}) {
    const {data: product_image} = await supabase.storage.from("site_assets").getPublicUrl("logo.png", {
        transform: {
            width: 300,
            resize: "contain"
        }
    });
    const {data: avatar} = await supabase.storage.from("site_assets").getPublicUrl("logo.png", {
        transform: {
            width: 40,
            resize: "contain"
        }
    });
    return { avatar: avatar.publicUrl, product_image: product_image.publicUrl };
};