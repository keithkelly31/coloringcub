<script>
	import { page } from '$app/stores';
	
	console.log($page)
</script>

{#if $page.error}
	<article>
		<hgroup>
			<h1>{$page.status}</h1>
			<h2>{$page.error.message}</h2>
		</hgroup>

		<footer>
			<a href="/">Go back home</a>
		</footer>
	</article>
{/if}

<style>
	article {
		text-align: center;
	}
</style>
