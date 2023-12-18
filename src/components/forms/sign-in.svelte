<script>
	import Button from '$components/elements/button.svelte';
	import Form from '$components/elements/form.svelte';
	import Input from '$components/elements/input.svelte';
	import Spinner from '$components/spinner.svelte';

	/** @type { any } */
	export let response;
</script>

<Form action="/api/v1/authenticate" let:busy bind:response>
	<Input
		label="Email"
		name="email"
		placeholder="Please enter your email address"
		type="email"
		required
	/>
	<input name="signin" type="hidden" value={true} />
	<Button type="submit">
		{#if busy}
			<Spinner />
		{/if}
		Sign In
	</Button>
</Form>
