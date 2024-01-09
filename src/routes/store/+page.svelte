<script>
	import images from '$assets/categories';
	import Heading from '$components/dynamic/heading.svelte';
	import Main from '$components/elements/main.svelte';
	import P from '$components/elements/p.svelte';
	import Grid from '$components/grid.svelte';

	/** @type {import('./$types').PageData} */
	export let data;

	let { categories } = data;
	$: ({ categories } = data);
</script>

<Main>
	<Heading type="h1">Store</Heading>

	<Grid>
		{#each categories as { alt, description, name, slug, src } (slug)}
			<a href="/store/category/{slug}" class="space-y-4">
				<enhanced:img src={images[src]} {alt} />
				<Heading class="text-xl mb-0" type="h2">{name}</Heading>
				<P>{description}</P>
			</a>
		{/each}
	</Grid>
</Main>
