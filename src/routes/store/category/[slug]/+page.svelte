<script>
	import { page } from '$app/stores';
	import images from '$assets/products/coloring-pages/cute-baby-animals/index';
	import Heading from '$components/dynamic/heading.svelte';
	import Button from '$components/elements/button.svelte';
	import Main from '$components/elements/main.svelte';
	import Grid from '$components/grid.svelte';

	/** @type { import("./$types").PageData } */
	export let data;

	let { category, products } = data;
	$: ({ category, products } = data);
</script>

<Main>
	<Heading class="capitalize">{category?.name || $page.params.slug.split('-').join(' ')}</Heading>

	{#if products}
		<Grid class="sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-y-12">
			{#each products as { alt, name, price, slug, src } (slug)}
				<div class="flex flex-col gap-6">
					<a href="/store/product/{slug}" class="flex-1 space-y-6">
						<enhanced:img class="rounded-lg shadow-md" src={images[src]} {alt} />
						<strong class="flex items-start justify-between">
							<span>{name}</span>
							<span>${price}</span>
						</strong>
					</a>
					<Button class="w-full justify-center">Add To Bag</Button>
				</div>
			{/each}
		</Grid>
	{:else}
		<h2>No products</h2>
	{/if}
</Main>
