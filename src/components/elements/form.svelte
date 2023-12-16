<script>
	import { enhance } from '$app/forms';
	import { writable } from 'svelte/store';

	/** @type {string } */
	export let action;

	/** @type { import("svelte/store").Writable<any> } */
	const response = writable(null);
	let busy = false;

	function handleSubmit() {
		busy = true;
		// @ts-ignore
		return async ({ result, update }) => {
			busy = false;
			response.set(result);
			update();
		};
	}
</script>

<form class="space-y-6" {action} method="POST" use:enhance={handleSubmit}>
	<slot {busy} response={$response} />
</form>
