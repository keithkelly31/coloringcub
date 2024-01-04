<script>
	import Heading from '$components/dynamic/heading.svelte';
	import P from '$components/elements/p.svelte';
	import Section from '$components/elements/section.svelte';

	/** @type {import('./$types').PageData} */
	export let data;
</script>

<Heading type="h1">Store</Heading>

<Section class="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
	<a href="/store/category/coloring-pages" class="space-y-4">
		<img
			class="rounded-lg shadow-lg"
			src="https://images.unsplash.com/photo-1619437806281-0effc4c2fbfd?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
			alt="Cute colorful bear cub"
		/>
		<Heading class="text-xl mb-0" type="h2">Coloring Pages</Heading>
		<P
			>Consequat do nulla ad proident ipsum in consequat Lorem quis occaecat velit est labore sit.
			Cupidatat officia esse proident duis id laboris dolore excepteur elit enim velit. Dolor culpa
			nostrud minim commodo nostrud eiusmod aliqua voluptate reprehenderit id nostrud aute ullamco
			aliquip.</P
		>
	</a>

	<a href="/store/category/coloring-books" class="space-y-4">
		<img
			class="rounded-lg shadow-lg"
			src="https://images.unsplash.com/photo-1619437806281-0effc4c2fbfd?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
			alt="Cute colorful bear cub"
		/>
		<Heading class="text-xl mb-0" type="h2">Coloring Books</Heading>
		<P
			>Consequat do nulla ad proident ipsum in consequat Lorem quis occaecat velit est labore sit.
			Cupidatat officia esse proident duis id laboris dolore excepteur elit enim velit. Dolor culpa
			nostrud minim commodo nostrud eiusmod aliqua voluptate reprehenderit id nostrud aute ullamco
			aliquip.</P
		>
	</a>

	<a href="/store/category/stickers" class="space-y-4">
		<img
			class="rounded-lg shadow-lg"
			src="https://images.unsplash.com/photo-1619437806281-0effc4c2fbfd?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
			alt="Cute colorful bear cub"
		/>
		<Heading class="text-xl mb-0" type="h2">Stickers</Heading>
		<P
			>Consequat do nulla ad proident ipsum in consequat Lorem quis occaecat velit est labore sit.
			Cupidatat officia esse proident duis id laboris dolore excepteur elit enim velit. Dolor culpa
			nostrud minim commodo nostrud eiusmod aliqua voluptate reprehenderit id nostrud aute ullamco
			aliquip.</P
		>
	</a>

	<a href="/store/category/shirts" class="space-y-4">
		<img
			class="rounded-lg shadow-lg"
			src="https://images.unsplash.com/photo-1619437806281-0effc4c2fbfd?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
			alt="Cute colorful bear cub"
		/>
		<Heading class="text-xl mb-0" type="h2">Shirts</Heading>
		<P
			>Consequat do nulla ad proident ipsum in consequat Lorem quis occaecat velit est labore sit.
			Cupidatat officia esse proident duis id laboris dolore excepteur elit enim velit. Dolor culpa
			nostrud minim commodo nostrud eiusmod aliqua voluptate reprehenderit id nostrud aute ullamco
			aliquip.</P
		>
	</a>
</Section>
