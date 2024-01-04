<script>
	import Heading from '$components/dynamic/heading.svelte';
	import Main from '$components/elements/main.svelte';
	import P from '$components/elements/p.svelte';
	import Grid from '$components/grid.svelte';
</script>

<Main>
	<Heading>Instagram Links</Heading>

	<P>Tap or click an image to view the link</P>

	<Grid class="grid-cols-2 md:grid-cols-3">
		<a href="https://www.etsy.com/listing/1649446025/cute-baby-alligator-coloring-page">
			<img
				src="https://i.etsystatic.com/48686386/r/il/d4c36c/5686953673/il_1588xN.5686953673_214a.jpg"
				alt="Cute baby alligator coloring page"
			/>
		</a>
	</Grid>
</Main>
