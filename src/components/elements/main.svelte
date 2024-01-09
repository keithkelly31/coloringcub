<script>
	export let fullPage = false;
	export let prose = false;
</script>

<main
	class="px-6 lg:px-8 py-24 sm:py-32 {$$restProps.class || ''}"
	class:grid={fullPage}
	class:min-h-full={fullPage}
	class:place-items-center={fullPage}
	class:container={!fullPage && !prose}
	class:mx-auto={!fullPage}
	class:max-w-4xl={prose}
>
	<slot />
</main>
