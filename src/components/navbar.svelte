<script>
	import { page } from '$app/stores';
	import Icon from './dynamic/icon.svelte';
	import SignIn from './modals/sign-in.svelte';
	import NavbarLink from './navbar-link.svelte';
</script>

<nav class="bg-primary-base fixed top-0 left-0 w-full z-40">
	<div class="flex items-center justify-between mx-auto p-4 relative">
		<a href="/" class="flex items-center">
			<enhanced:img
				src="../assets/logo-sticker.png?w=100"
				alt="Cute colorful bear cub"
				class="absolute top-0 left-0"
			/>

			<span
				class="hidden md:inline-block text-2xl font-semibold whitespace-nowrap ml-24 text-white hover:text-primary-lightest"
			>
				Coloring Cub
			</span>
		</a>

		<ul class="font-medium p-0 mt-0 flex flex-row gap-6 md:gap-8">
			<!-- <NavbarLink class="block md:hidden" href="/menu">
				<Icon class="text-3xl" icon="list" style="bootstrap" />
			</NavbarLink> -->

			<NavbarLink href="/store">
				<Icon class="md:hidden text-xl" icon="shop" style="bootstrap" />
				<span class="hidden md:inline-block">Store</span>
			</NavbarLink>

			<NavbarLink href="/blog">
				<Icon class="md:hidden text-xl" icon="newspaper" style="bootstrap" />
				<span class="hidden md:inline-block">Blog</span>
			</NavbarLink>

			<NavbarLink href="/about">
				<Icon class="md:hidden text-xl" icon="info-circle" style="bootstrap" />
				<span class="hidden md:inline-block">About</span>
			</NavbarLink>

			{#if $page.data.session}
				<NavbarLink href="/member/dashboard">
					<Icon class="md:hidden text-xl" icon="speedometer2" style="bootstrap" />
					<span class="hidden md:inline-block">Dashboard</span>
				</NavbarLink>
			{:else}
				<li><SignIn /></li>
			{/if}

			<NavbarLink class="flex items-center gap-2" href="/store/cart">
				<Icon class="text-xl" icon="bag" style="bootstrap" />
				<span class="font-semibold">0</span>
			</NavbarLink>
		</ul>
	</div>
</nav>
