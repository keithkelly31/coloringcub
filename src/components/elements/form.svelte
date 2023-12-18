<script>
	import { enhance } from '$app/forms';

	/** @type {string } */
	export let action;

	/** @type { any } */
	export let response = null;

	let busy = false;

	function handleSubmit() {
		busy = true;
		// @ts-ignore
		return async ({ result, update }) => {
			busy = false;
			response = result;
			update();
		};
	}
</script>

<form class="space-y-6" {action} method="POST" use:enhance={handleSubmit}>
	<slot {busy} />
</form>
