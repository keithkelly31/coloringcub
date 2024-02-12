<script>
	import { invalidate } from '$app/navigation';
	import '@fontsource-variable/quicksand';
	import 'bootstrap-icons/font/bootstrap-icons.css';
	import { onMount } from 'svelte';
	import '../app.scss';

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
	<script defer data-domain="coloringcub.com" src="https://plausible.io/js/script.js"></script>
</svelte:head>

<header>
	<nav>
		<ul>
			<li>
				<a href="/">
					<enhanced:img src="../assets/logo-sticker.png?w=100" alt="Cute colorful bear cub" />
					<strong class="brand">Coloring Cub</strong>
				</a>
			</li>
		</ul>
	</nav>
</header>

<main>
	<slot />
</main>

<style>
	.brand {
		font-size: calc(var(--pico-font-size) * 1.25);
	}
</style>
