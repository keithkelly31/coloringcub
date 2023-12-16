<script>
	import Button from '$components/elements/button.svelte';
	import Icon from './dynamic/icon.svelte';

	/** @type { string } */
	export let title;

	let open = false;

	function toggleOpen() {
		open = !open;
	}
</script>

<Button class={$$restProps.buttonClass || ''} on:click={() => (open = !open)}>
	<slot name="text" />
</Button>

{#if open}
	<div class="fixed top-0 left-0 right-0 bottom-0 bg-secondary-darkest z-40 opacity-95"></div>
	<div
		tabindex="-1"
		aria-hidden="true"
		class="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
	>
		<div class="relative p-4 w-full max-w-2xl max-h-full">
			<div class="relative bg-white rounded-lg shadow dark:bg-secondary-800">
				<div
					class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-secondary-base"
				>
					<h3 class="text-xl font-semibold text-gray-900 dark:text-white">
						{title}
					</h3>
					<Button
						on:click={toggleOpen}
						class="bg-transparent hover:bg-transparent px-0 focus:ring-0"
					>
						<Icon icon="x-lg" style="bootstrap" />
						<span class="sr-only">Close modal</span>
					</Button>
				</div>
				<div class="p-4 md:p-5">
					<slot />
				</div>
			</div>
		</div>
	</div>
{/if}
