<script>
	// @ts-nocheck

	export let placeholder = '';
	export let required = false;

	/** @type { string } */
	export let label = null;

	/** @type { string } */
	export let name;

	/** @type { HTMLInputElement.type } */
	export let type = 'text';

	const id =
		Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
</script>

{#if label}
	<label for={id} class="block mb-2 text-sm font-semibold text-secondary-darkest dark:text-white">
		{label}
	</label>
{/if}
<input
	{type}
	{id}
	class="bg-secondary-100 border border-secondary-light text-secondary-darkest rounded-lg focus:ring-2 focus:ring-primary-base focus:border-primary-base block w-full px-2.5 py-4 dark:bg-secondary-dark dark:border-secondary-base dark:placeholder-secondary-light dark:text-white dark:focus:ring-primary-base dark:focus:border-primary-light outline-none {$$restProps.class ||
		''}"
	{name}
	{placeholder}
	{required}
/>
