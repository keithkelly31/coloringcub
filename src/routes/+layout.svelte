<script>
	import { invalidate } from '$app/navigation';
	import Nav from '$components/nav.svelte';
	import '@fontsource-variable/quicksand';
	import '@picocss/pico/css/pico.colors.min.css';
	import '@picocss/pico/css/pico.min.css';
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
		<Nav />
	</nav>
</header>

<main>
	<slot />
</main>

<style lang="postcss">
	.brand {
		font-size: calc(var(--pico-font-size) * 1.25);
	}
</style>
