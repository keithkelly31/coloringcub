<script>
	export let fullPage = false;
</script>

<main
	class="px-6 lg:px-8 py-24 sm:py-32"
	class:grid={fullPage}
	class:min-h-full={fullPage}
	class:place-items-center={fullPage}
	class:max-w-5xl={!fullPage}
	class:mx-auto={!fullPage}
>
	<slot />
</main>
