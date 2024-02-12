<script>
	import { page } from '$app/stores';
</script>

{#if $page.error}
	<article>
		<h1>{$page.status}</h1>
		<p>{$page.error.message}</p>
		<a href="/">Back to home</a>
	</article>
{/if}
