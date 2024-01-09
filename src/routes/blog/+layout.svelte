<script>
	import Main from '$components/elements/main.svelte';

	/** @type {import('./$types').LayoutData} */
	export let data;
</script>

<Main class="max-w-3xl">
	<slot />
</Main>
