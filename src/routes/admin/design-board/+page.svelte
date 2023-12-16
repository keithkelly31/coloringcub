<script>
	import Icon from '$components/dynamic/icon.svelte';
	import Button from '$components/elements/button.svelte';
	import Input from '$components/elements/input.svelte';
	import { colors } from '$lib/config';
</script>

<h1 class="text-2xl font-bold mb-4">Design Board</h1>

<section class="my-12">
	<h2 class="text-xl font-bold mb-4">Colors</h2>
	{#each colors.palettes as { lock, name, palette, shades }}
		<div class="my-6">
			<h3 class="text-lg font-semibold mb-3 capitalize flex items-center gap-2">
				<div>{name}</div>
				{#if name === colors.primary}
					<Icon class="text-green-600 text-2xl" icon="verified" style="material" />
				{/if}
			</h3>
			<div class="grid grid-flow-col auto-cols-fr gap-1 text-sm text-center">
				{#each Object.entries(palette) as shade}
					<div>
						<div class="h-20 rounded-xl grid place-items-center" style:background-color={shade[1]}>
							{#if lock === shade[0]}
								<Icon class="text-4xl opacity-40 text-white" icon="lock" style="bootstrap" />
							{/if}
						</div>
						<div><strong>{shade[0]}</strong></div>
						<div class="text-secondary-dark dark:text-secondary-light">{shade[1]}</div>
					</div>
				{/each}
			</div>

			<div class="grid grid-flow-col auto-cols-fr gap-1 text-sm text-center mt-6">
				{#each Object.entries(shades) as shade}
					<div>
						<div class="h-20 rounded-xl grid place-items-center" style:background-color={shade[1]}>
							{#if lock === shade[0]}
								<Icon class="text-4xl opacity-40 text-white" icon="lock" style="material" />
							{/if}
						</div>
						<div><strong>{shade[0]}</strong></div>
						<div class="text-secondary-500">{shade[1]}</div>
					</div>
				{/each}
			</div>
		</div>
	{/each}
</section>

<section class="my-12 space-y-6">
	<h2 class="text-xl font-bold mb-4">Buttons</h2>
	<div>
		<h3 class="text-lg font-semibold mb-3">Defaults</h3>
		<div class="flex gap-3">
			<Button label="Primary" />
			<Button label="Secondary" style="secondary" />
			<Button label="Danger" style="danger" />
		</div>
	</div>

	<div>
		<h3 class="text-lg font-semibold mb-3">Icon Buttons</h3>
		<div class="flex gap-3">
			<Button icon="check-circle" iconStyle="bootstrap" label="Default" />
			<Button icon="dash-circle" iconStyle="bootstrap" label="Secondary" style="secondary" />
			<Button icon="trash" iconStyle="bootstrap" label="Danger" style="danger" />
		</div>
	</div>
</section>

<section class="my-12 space-y-6">
	<h2 class="text-xl font-bold mb-4">Inputs</h2>
	<Input name="text" placeholder="This is a placeholder" />
	<Input label="Label" name="text" placeholder="This is a placeholder" />
</section>
