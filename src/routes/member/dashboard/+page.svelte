<script>
	import { invalidateAll } from '$app/navigation';
	import Heading from '$components/dynamic/heading.svelte';
	import Button from '$components/elements/button.svelte';
	import Main from '$components/elements/main.svelte';
	import Section from '$components/elements/section.svelte';
	import Switch from '$components/elements/switch.svelte';

	export let data;

	let { session, supabase, user } = data;
	$: ({ session, supabase, user } = data);

	let checked = user.email_opt_out;

	async function signOut() {
		await supabase.auth.signOut();
		invalidateAll();
	}

	async function update() {
		checked = !checked;
		const { error } = await supabase
			.from('profiles')
			.update({
				email_opt_out: checked
			})
			.eq('id', session?.user.id);
	}
</script>

<Main>
	<Heading type="h1">Dashboard</Heading>

	<Section>
		<Button on:click={signOut}>Sign Out</Button>
	</Section>

	<Section>
		<Heading type="h2">Settings</Heading>

		<div class="flex gap-4">
			<div>
				<Switch bind:checked on:change={update} />
			</div>

			<div class="flex-1">
				<strong>Email Opt Out:</strong>
				<p>Opt out of any promotional or marketing emails.</p>
			</div>
		</div>
	</Section>
</Main>
