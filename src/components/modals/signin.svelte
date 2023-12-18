<script>
	import Alert from '$components/alert.svelte';
	import P from '$components/elements/p.svelte';
	import SignIn from '$components/forms/sign-in.svelte';
	import SignUp from '$components/forms/sign-up.svelte';
	import Modal from '$components/modal.svelte';

	/** @type { any } */
	let response;
</script>

<Modal
	buttonClass="!p-0 !m-0 hover:bg-transparent !ring-0"
	title={response && response.status === 404 ? 'Sign Up' : 'Sign In'}
>
	<span slot="buttonText">Sign In</span>

	{#if response && response.status === 404}
		<Alert style={response.type}>
			{response.data.message}
		</Alert>

		<SignUp bind:response />
	{:else if response && response.status === 200}
		<Alert style={response.type}>
			{response.data.message}
		</Alert>
	{:else}
		{#if response && response.status === 500}
			<Alert style={response.type}>
				{response.data.message}
			</Alert>
		{/if}
		<P>
			We all have enough passwords to remember. That is why we use a "magic link" system. A password
			is not required. Instead, a link is sent to your email, and clicking that link completes the
			sign-in process.
		</P>

		<SignIn bind:response />
	{/if}
</Modal>
