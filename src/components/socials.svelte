<script>
	import Section from '$components/elements/section.svelte';
</script>

<Section class="flex gap-8 {$$restProps.class || ''}">
	<a
		class="text-di-serria-base hover:text-di-serria-dark"
		href="https://www.facebook.com/coloringcub"
	>
		<i class="bi-facebook text-4xl"></i>
		<span class="sr-only">Facebook</span>
	</a>

	<a class="text-keppel-base hover:text-keppel-dark" href="https://www.instagram.com/coloringcub/">
		<i class="bi-instagram text-4xl"></i>
		<span class="sr-only">Instagram</span>
	</a>

	<a class="text-plum-base hover:text-plum-dark" href="https://www.pinterest.com/coloringcub">
		<i class="bi-pinterest text-4xl"></i>
		<span class="sr-only">Pinterest</span>
	</a>

	<a class="text-galliano-base hover:text-galliano-dark" href="https://twitter.com/coloringcub">
		<i class="bi-twitter-x text-4xl"></i>
		<span class="sr-only">Twitter</span>
	</a>
</Section>
