<script>
	import { invalidate } from '$app/navigation';
	import Navbar from '$components/navbar.svelte';
	import '@fontsource-variable/quicksand';
	import 'bootstrap-icons/font/bootstrap-icons.css';
	import { onMount } from 'svelte';
	import '../app.css';

	export let data;

	let { supabase, session } = data;
	$: ({ supabase, session } = data);

	onMount(() => {
		const { data } = supabase.auth.onAuthStateChange((event, _session) => {
			if (_session?.expires_at !== session?.expires_at) {
				invalidate('supabase:auth');
			}
		});

		return () => data.subscription.unsubscribe();
	});
</script>

<svelte:head>
	<title>Coloring Cub</title>
	<link
		rel="stylesheet"
		href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
	/>
</svelte:head>

<!-- <svelte:window
	on:contextmenu={(e) => {
		e.preventDefault();
		return false;
	}}
/> -->

<Navbar />

<slot />

<style lang="postcss">
	:global(html) {
		@apply h-full;
	}

	:global(body) {
		@apply h-full bg-secondary-50 text-lg text-secondary-darkest subpixel-antialiased dark:bg-secondary-darkest dark:text-secondary-lightest;
	}
</style>
