<script>
	import { invalidateAll } from '$app/navigation';
	import Heading from '$components/dynamic/heading.svelte';
	import Main from '$components/elements/main.svelte';
	import Spinner from '$components/spinner.svelte';

	export let data;

	let { session } = data;
	$: ({ supabase, session } = data);

	$: if (session) {
		invalidateAll();
	}
</script>

<Main fullPage>
	<Heading class="flex items-center gap-4" type="h1">
		<Spinner class="block" />
		<div>Authenticating</div>
	</Heading>
</Main>
