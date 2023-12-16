<script>
	import { page } from '$app/stores';
	import Heading from '$components/dynamic/heading.svelte';
	import Icon from '$components/dynamic/icon.svelte';
	import A from '$components/elements/a.svelte';
	import Main from '$components/elements/main.svelte';
	import P from '$components/elements/p.svelte';
</script>

{#if $page.error}
	<Main fullPage>
		<div class="text-center">
			{#if $page.status === 404}
				<P class="font-semibold text-primary-base text-2xl">404</P>
				<Heading class="mb-6" type="h1">Page not found</Heading>
				<P>Sorry, we couldn’t find the page you’re looking for.</P>
				<A href="/">
					<Icon icon="arrow-left-circle" style="bootstrap" />
					Go Back Home
				</A>
			{/if}
		</div>
	</Main>
{/if}
