<script>
	/** @type { string } */
	export let href;
</script>

<a
	{href}
	class="text-primary-base hover:text-primary-dark dark:text-primary-light dark:hover:text-primary-base font-semibold inline-flex items-center gap-2 {$$restProps.class ||
		''}"
>
	<slot />
</a>
