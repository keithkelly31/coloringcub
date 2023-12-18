<script>
	import Heading from '$components/dynamic/heading.svelte';
	import Main from '$components/elements/main.svelte';
	import Section from '$components/elements/section.svelte';
	import Switch from '$components/elements/switch.svelte';

	export let data;

	let { session, settings, supabase } = data;
	$: ({ session, settings, supabase } = data);

	let checked = settings.email_opt_out;

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
		<Heading type="h2">Settings</Heading>

		<div class="flex gap-4">
			<div class="flex-1">
				<strong>Email Opt Out:</strong>
				<p>Opt out of any promotional or marketing emails.</p>
			</div>

			<div>
				<Switch bind:checked on:change={update} />
			</div>
		</div>
	</Section>
</Main>
