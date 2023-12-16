<script>
	/** @type { string } */
	export let href;
</script>

<a
	{href}
	class="text-primary-base hover:text-primary-dark font-semibold inline-flex items-center gap-2 {$$restProps.class ||
		''}"
>
	<slot />
</a>
