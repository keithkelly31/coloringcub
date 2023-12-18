<script>
	import Button from '$components/elements/button.svelte';
	import Form from '$components/elements/form.svelte';
	import Input from '$components/elements/input.svelte';
	import P from '$components/elements/p.svelte';
	import Spinner from '$components/spinner.svelte';

	/** @type { any } */
	export let response;
</script>

<P>
	Join our community! Sign up today, and you'll be the first to receive exciting updates, exclusive
	offers, and sneak peeks into our latest projects. We'll let you know when we drop the newest
	coloring pages, coloring books, children's stories, stickers, and more. Join us today, and let's
	embark on this colorful journey together!
</P>

<Form action="/api/v1/authenticate" let:busy bind:response>
	<Input
		class={$$restProps.inputClass || ''}
		label="First Name"
		labelClass={$$restProps.labelClass || ''}
		name="first_name"
		placeholder="Enter your first name"
		required
	/>

	<Input
		class={$$restProps.inputClass || ''}
		label="Email"
		labelClass={$$restProps.labelClass || ''}
		name="email"
		placeholder="Enter your email"
		type="email"
		required
	/>

	<Button type="submit">
		{#if busy}
			<Spinner />
		{/if}
		Sign Up
	</Button>
</Form>

<P class="text-sm mt-4 mb-0">
	Subscribing to our email list will create an account on coloringcub.com. You will not need a
	password and can log in with only your email to manage your settings. The account is free, and we
	will not collect personal information beyond your email address and first name. You can create a
	profile if you'd like, but it is not required.
</P>
