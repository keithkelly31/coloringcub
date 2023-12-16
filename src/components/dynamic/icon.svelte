<script>
	import Bootstrap from '$components/icons/bootstrap.svelte';
	import Material from '$components/icons/material.svelte';

	/** @type {string} */
	export let icon;

	/** @type { ("bootstrap" | "material") } */
	export let style;

	let component = style === 'bootstrap' ? Bootstrap : Material;
</script>

<svelte:component this={component} {icon} {...$$restProps} />
