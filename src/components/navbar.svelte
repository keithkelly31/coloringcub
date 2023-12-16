<script>
	// import { page } from '$app/stores';
	// import Icon from './dynamic/icon.svelte';
	// import Signin from './modals/signin.svelte';
</script>

<nav class="bg-primary-base fixed top-0 left-0 w-full">
	<div class="flex flex-wrap items-center justify-between mx-auto p-4 relative">
		<div>
			<enhanced:img
				src="../assets/logo-sticker.png?w=100"
				alt="Cute colorful bear cub"
				class="absolute top-0 left-0"
			/>

			<a
				href="/"
				class="text-2xl font-semibold whitespace-nowrap ml-24 text-white hover:text-primary-lightest"
			>
				Coloring Cub
			</a>
		</div>

		<!-- <button class="flex md:hidden" on:click={() => console.log('clicked')}>
			<Icon icon="list" style="bootstrap" class="text-white text-3xl" />
		</button>

		<div class="hidden w-full md:block md:w-auto">
			<ul
				class="font-medium flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0"
			>
				<li>
					<a
						href="/about"
						class="block py-2 px-3 text-white hover:text-primary-lightest rounded md:p-0">About</a
					>
				</li>
				<li>
					{#if $page.data.session}
						<li>
							<a
								href="/dashboard"
								class="block py-2 px-3 text-white hover:text-primary-lightest rounded md:p-0"
							>
								Dashboard
							</a>
						</li>
					{:else}
						<Signin />
					{/if}
				</li>
			</ul>
		</div> -->
	</div>
</nav>
