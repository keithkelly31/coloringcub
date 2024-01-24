<script>
	import { goto } from '$app/navigation';
	import Icon from '$components/dynamic/icon.svelte';
	import A from '$components/elements/a.svelte';
	import Button from '$components/elements/button.svelte';
	import Form from '$components/elements/form.svelte';
	import Input from '$components/elements/input.svelte';
	import Main from '$components/elements/main.svelte';

	/** @type {import('./$types').LayoutData} */
	export let data;

	let href = '';

	/**
	 * @function
	 * @param { any } e
	 */
	const handleChange = (e) => goto(e.target.value);
</script>

<Main>
	<div class="flex flex-col lg:flex-row gap-12">
		<nav class="h-100 w-full lg:max-w-xs space-y-6 lg:space-y-12">
			<Form action="/?search" class="space-y-0">
				<label
					class="block mb-2 text-sm font-semibold text-secondary-darkest dark:text-white"
					for="search">Search Items</label
				>
				<div class="flex">
					<Input
						class="rounded-e-none flex-1"
						id="search"
						name="search"
						placeholder="Search Items"
					/>
					<Button class="!m-0 rounded-s-none" type="submit">Search</Button>
				</div>
			</Form>

			<select
				class="bg-secondary-100 border border-secondary-light text-secondary-darkest rounded-lg focus:ring-2 focus:ring-primary-base focus:border-primary-base block w-full px-2.5 py-4 dark:bg-secondary-dark dark:border-secondary-base dark:placeholder-secondary-light dark:text-white dark:focus:ring-primary-base dark:focus:border-primary-light outline-none lg:hidden"
				bind:value={href}
				on:change={handleChange}
			>
				<optgroup label="Cute Baby Animals" />
				<optgroup label="African">
					<option value="/store">Coloring Books</option>
					<option value="/">Coloring Pages</option>
				</optgroup>
			</select>

			<ul class="hidden lg:block">
				<li class="py-3">
					<strong>Cute Baby Animals</strong>
					<ul>
						<li class="py-3">
							<span class="text-sm uppercase font-bold">African</span>
							<ul class="pl-3">
								<li class="py-1 flex items-center gap-2">
									<A href="">
										<Icon icon="auto_stories" style="material" />
										<span>Coloring Books</span>
									</A>
								</li>
								<li class="py-1">
									<A href="">
										<Icon icon="image" style="material" />
										<span>Coloring Pages</span>
									</A>
								</li>
								<li class="py-1">
									<A href="">
										<Icon icon="apparel" style="material" />
										<span>Merchandise</span>
									</A>
								</li>
							</ul>
						</li>
						<li class="py-3">
							<span class="text-sm uppercase font-bold">North American</span>
							<ul class="pl-3">
								<li class="py-1 flex items-center gap-2">
									<A href="">
										<Icon icon="auto_stories" style="material" />
										<span>Coloring Books</span>
									</A>
								</li>
								<li class="py-1">
									<A href="">
										<Icon icon="image" style="material" />
										<span>Coloring Pages</span>
									</A>
								</li>
							</ul>
						</li>
					</ul>
				</li>
			</ul>
		</nav>

		<div class="flex-1">
			<slot />
		</div>
	</div>
</Main>
