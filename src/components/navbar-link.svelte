<script>
	/** @type {string} */
	export let href;
</script>

<li class="flex items-center">
	<a
		{href}
		class="flex items-center text-white hover:text-primary-lightest {$$restProps.class || ''}"
		title="Test"
	>
		<slot />
	</a>
</li>
