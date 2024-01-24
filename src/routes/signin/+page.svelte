<script>
	import { enhance } from '$app/forms';
	import Icon from '$components/dynamic/icon.svelte';

	export let form;

	let busy = false;

	function dismiss() {
		form = null;
	}

	/** @type { import("./$types.js").SubmitFunction } */
	function submit() {
		busy = true;
		return async ({ update }) => {
			busy = false;
			update();
		};
	}
</script>

<h1>Sign In</h1>

{#if form?.error}
	<article class="pico-background-red-550">
		<span>{form.error}</span>
		<button class="pico-background-red-550" on:click={dismiss}>
			<Icon icon="x-lg" style="bootstrap" />
		</button>
	</article>
{/if}

<form method="POST" use:enhance={submit}>
	<label for="email">Email</label>
	<input autocomplete="email" id="email" name="email" type="email" />

	<label for="password">Password</label>
	<input autocomplete="new-password" name="password" id="password" type="password" />

	<p>
		<small>Don't have an account? <a href="/signup">Sign Up</a></small>
	</p>

	<button aria-busy={busy} type="submit">Sign In</button>
</form>

<style>
	article {
		align-items: center;
		display: flex;
		justify-content: space-between;
	}

	article button {
		border: 0;
		padding-right: 0;
	}
</style>
