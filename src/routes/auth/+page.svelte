<script>
	import Heading from '$components/dynamic/heading.svelte';
	import Main from '$components/elements/main.svelte';
	import Spinner from '$components/spinner.svelte';
</script>

<Main fullPage>
	<Heading class="flex items-center gap-4" type="h1">
		<Spinner class="block" />
		<div>Authenticating</div>
	</Heading>
</Main>
