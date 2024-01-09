<script>
	import Section from './elements/section.svelte';
</script>

<Section
	class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-6 gap-y-12 {$$restProps.class || ''}"
>
	<slot />
</Section>
