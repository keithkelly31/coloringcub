<script>
	import H1 from '$components/elements/h1.svelte';
	import H2 from '$components/elements/h2.svelte';
	import H3 from '$components/elements/h3.svelte';
	import H4 from '$components/elements/h4.svelte';
	import H5 from '$components/elements/h5.svelte';
	import H6 from '$components/elements/h6.svelte';

	/** @type { "h1" | "h2" | "h3" | "h4" | "h5" | "h6" } */
	export let type = 'h1';

	const options = {
		h1: H1,
		h2: H2,
		h3: H3,
		h4: H4,
		h5: H5,
		h6: H6
	};

	let component = options[type];
</script>

<svelte:component this={component} {...$$restProps}><slot /></svelte:component>
