<script>
	import Button from '$components/elements/button.svelte';
	import Form from '$components/elements/form.svelte';
	import Input from '$components/elements/input.svelte';
	import P from '$components/elements/p.svelte';
	import Modal from '$components/modal.svelte';
	import Spinner from '$components/spinner.svelte';
</script>

<Modal buttonClass="!p-0 !m-0 hover:bg-transparent !ring-0" title="Sign In">
	<span slot="text">Sign In</span>

	<P>
		Nulla aliqua excepteur qui cillum do anim enim Lorem enim duis commodo. Adipisicing id voluptate
		occaecat pariatur eiusmod eiusmod nulla mollit officia sunt adipisicing ipsum sunt. Esse culpa
		et ipsum consequat anim irure sit aute elit proident.
	</P>

	<Form action="/api/v1/authenticate" let:busy let:response>
		<Input
			label="Email"
			name="email"
			placeholder="Please enter your email address"
			type="email"
			required
		/>
		<Button type="submit">
			{#if busy}
				<Spinner />
			{/if}
			Sign In
		</Button>
	</Form>
</Modal>
