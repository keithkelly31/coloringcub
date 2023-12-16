<script>
	// @ts-nocheck

	/** @type { "danger" | "primary" | "secondary" } */
	export let style = 'primary';

	/** @type { HTMLButtonElement.type } */
	export let type = 'button';
</script>

<button
	{type}
	class="text-white focus:ring-4 font-medium rounded-lg px-5 py-2.5 me-2 mb-2 focus:outline-none flex items-center gap-2 {$$restProps.class ||
		''}"
	class:bg-primary-base={style === 'primary'}
	class:hover:bg-primary-dark={style === 'primary'}
	class:focus:ring-primary-lightest={style === 'primary'}
	class:bg-secondary-base={style === 'secondary'}
	class:hover:bg-secondary-dark={style === 'secondary'}
	class:focus:ring-secondary-lightest={style === 'secondary'}
	class:dark:bg-secondary-light={style === 'secondary'}
	class:dark:hover:bg-secondary-base={style === 'secondary'}
	class:dark:focus:ring-secondary-dark={style === 'secondary'}
	class:bg-danger-base={style === 'danger'}
	class:hover:bg-danger-dark={style === 'danger'}
	class:focus:ring-danger-lightest={style === 'danger'}
	on:click
>
	<slot />
</button>
