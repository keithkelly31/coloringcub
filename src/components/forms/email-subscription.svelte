<script>
	import Alert from '$components/alert.svelte';
	import Heading from '$components/dynamic/heading.svelte';
	import Button from '$components/elements/button.svelte';
	import Form from '$components/elements/form.svelte';
	import Input from '$components/elements/input.svelte';
	import P from '$components/elements/p.svelte';
	import Section from '$components/elements/section.svelte';
	import Spinner from '$components/spinner.svelte';
</script>

<Section class="bg-galliano-base p-4 rounded-lg dark:text-secondary-darkest">
	<Heading type="h2">Be In The Know</Heading>
	<P>
		Join our community! By signing up for our email list, you'll be the first to receive exciting
		updates, exclusive offers, and sneak peeks into our latest projects. We'll let you know when we
		drop the newest coloring pages, coloring books, children's stories, stickers, and more. Join us
		today, and let's embark on this colorful journey together!
	</P>
	<Form action="/api/v1/authenticate" let:busy let:response>
		{#if response?.type}
			<Alert style={response.type}>
				{response.data.message}
			</Alert>
		{:else}
			<Input
				class="!bg-galliano-light !border-galliano-dark !placeholder-galliano-base !text-galliano-dark"
				name="email"
				placeholder="Enter your email"
				required
			/>

			<Button type="submit">
				{#if busy}
					<Spinner />
				{/if}
				Subscribe
			</Button>
		{/if}
	</Form>

	<P class="text-sm mt-4 mb-0">
		Subscribing to our email list will create an account on coloringcub.com. You will not need a
		password and can log in with only your email to manage your settings. The account is free, and
		we will not collect personal information beyond your email address. You can create a profile if
		you'd like, but it is not required.
	</P>
</Section>
