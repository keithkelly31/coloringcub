<script>
	import Icon from './dynamic/icon.svelte';

	/** @type { "error" | "failure" | "success" } */
	export let style;
</script>

<div
	class="flex items-center p-4 mb-4 rounded-lg space-x-4"
	class:bg-success-lightest={style === 'success'}
	class:text-success-darkest={style === 'success'}
	class:bg-danger-lightest={style === 'error' || style === 'failure'}
	class:text-danger-darkest={style === 'error' || style === 'failure'}
	role="alert"
>
	<Icon
		icon={style === 'error' || style === 'failure' ? 'x-circle' : 'check-circle'}
		style="bootstrap"
	/>
	<span class="sr-only">{style}</span>
	<div>
		<slot />
	</div>
</div>
