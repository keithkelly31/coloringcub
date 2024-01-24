<script>
	import { page } from '$app/stores';
</script>

<ul>
	<li>
		<a href="/blog">Blog</a>
	</li>
	<li>
		<a href="/about">About</a>
	</li>
	<li>
		<a href="/merchandise">Merchandise</a>
	</li>

	{#if $page.data.session}
		<li>
			<a href="/community">Community</a>
		</li>
		<li>
			<a href="/dashboard">Dashboard</a>
		</li>
		<li>
			<a href="/downloads">Downloads</a>
		</li>
		<li>
			<a href="/signout">Sign Out</a>
		</li>
	{:else}
		<li>
			<a href="/signin">Sign In</a>
		</li>
		<li>
			<a href="/signup">Sign Up</a>
		</li>
	{/if}
</ul>
