<script>
	import Heading from '$components/dynamic/heading.svelte';
	import Icon from '$components/dynamic/icon.svelte';
	import A from '$components/elements/a.svelte';
	import Button from '$components/elements/button.svelte';
	import Hr from '$components/elements/hr.svelte';
	import Main from '$components/elements/main.svelte';
	import P from '$components/elements/p.svelte';
	import Section from '$components/elements/section.svelte';
	import Ul from '$components/elements/ul.svelte';
	import Socials from '$components/socials.svelte';

	export let data;

	let { product } = data;
	$: ({ product } = data);
</script>

<Main prose>
	<nav class="flex items-center space-x-3 mb-8">
		<A href="/">Home</A>
		<Icon class="text-galliano-base" icon="caret-right" style="bootstrap" />
		<A href="/store">Store</A>
		<Icon class="text-galliano-base" icon="caret-right" style="bootstrap" />
		<A class="capitalize" href="/store/category/{product.category}">
			{product.category.split('-').join(' ')}
		</A>
		<Icon class="text-galliano-base" icon="caret-right" style="bootstrap" />
		<span>{product.name}</span>
	</nav>

	<Heading class="flex flex-col gap-6 md:gap-0 md:flex-row md:items-center justify-between">
		<div>{product.name}</div>
		<div>${product.price}</div>
	</Heading>

	<Section class="grid place-content-center">
		<img
			class="rounded-lg shadow-lg"
			src={product.src}
			alt="Cute colorful bear cub"
			height="1100"
			width="850"
		/>
	</Section>

	<div class="flex gap-3">
		<div class="text-galliano-base">
			<Icon icon="star-fill" style="bootstrap" />
			<Icon icon="star-fill" style="bootstrap" />
			<Icon icon="star-fill" style="bootstrap" />
			<Icon icon="star-fill" style="bootstrap" />
			<Icon icon="star-half" style="bootstrap" />
		</div>
		<div class="text-secondary-base dark:text-secondary-light">4.65 (50)</div>
	</div>

	<small class="text-secondary-base dark:text-secondary-light">Version 1.0</small>
	<P>
		Cupidatat Lorem irure velit quis excepteur velit duis consectetur consectetur deserunt nisi
		velit. Eu excepteur quis dolore nulla officia eu. Deserunt ipsum commodo reprehenderit anim.
		Amet ad non do ad labore consequat. Non occaecat veniam nisi nostrud irure qui minim dolor elit
		aliquip. Duis sint magna laborum officia. Ullamco Lorem ipsum mollit do ut.
	</P>

	<div class="grid">
		<Button class="justify-center">Add To Cart</Button>
	</div>

	<Hr />

	<Section>
		<Heading type="h2">Highlights</Heading>
		<Ul>
			<li>
				Cillum mollit mollit qui veniam fugiat eu sint proident veniam ullamco ex fugiat mollit.
			</li>
			<li>Nostrud Lorem excepteur ipsum nisi nostrud commodo mollit.</li>
			<li>Velit id elit laborum quis.</li>
		</Ul>
	</Section>

	<Hr />

	<Section>
		<Heading type="h2">License</Heading>
		<P>
			Aliqua laborum aute consequat anim aliqua pariatur eiusmod magna et non consequat id
			incididunt. Occaecat cupidatat consequat irure excepteur labore sint ea Lorem enim labore
			fugiat exercitation irure. Dolore ex excepteur mollit quis ullamco exercitation anim.
		</P>
	</Section>

	<Hr />

	<Section>
		<Heading type="h2">Share</Heading>
		<Socials />
	</Section>

	<Hr />

	<Section class="space-y-10">
		<Heading type="h2">Customer Reviews</Heading>

		<div class="grid grid-flow-col gap-3">
			<div>
				<!-- <img src={avatar} alt="Avatar" /> -->
			</div>
			<div>
				<strong>Member Name</strong>
				<div class="text-galliano-base">
					<Icon icon="star-fill" style="bootstrap" />
					<Icon icon="star-fill" style="bootstrap" />
					<Icon icon="star-fill" style="bootstrap" />
					<Icon icon="star-fill" style="bootstrap" />
					<Icon icon="star-fill" style="bootstrap" />
				</div>
				<P>
					Ea ex esse nisi ut duis qui Lorem exercitation aliquip mollit. Eu aute quis cillum enim
					ipsum ad culpa amet. Voluptate cillum deserunt nisi eu excepteur consequat elit nulla
					laborum est in. Elit proident pariatur commodo incididunt cillum amet dolore minim sunt
					officia aliqua. Ea aliqua labore dolor incididunt excepteur fugiat consequat veniam
					occaecat ipsum. Nulla dolore cillum non sunt. Dolor fugiat excepteur commodo aliqua culpa
					ut laboris nisi non culpa.
				</P>
			</div>
		</div>

		<div class="grid grid-flow-col gap-3">
			<div>
				<!-- <img src={avatar} alt="Avatar" /> -->
			</div>
			<div>
				<strong>Member Name</strong>
				<div class="text-galliano-base">
					<Icon icon="star-fill" style="bootstrap" />
					<Icon icon="star-fill" style="bootstrap" />
					<Icon icon="star-fill" style="bootstrap" />
					<Icon icon="star-fill" style="bootstrap" />
					<Icon icon="star-fill" style="bootstrap" />
				</div>
				<P>
					Ea ex esse nisi ut duis qui Lorem exercitation aliquip mollit. Eu aute quis cillum enim
					ipsum ad culpa amet. Voluptate cillum deserunt nisi eu excepteur consequat elit nulla
					laborum est in. Elit proident pariatur commodo incididunt cillum amet dolore minim sunt
					officia aliqua. Ea aliqua labore dolor incididunt excepteur fugiat consequat veniam
					occaecat ipsum. Nulla dolore cillum non sunt. Dolor fugiat excepteur commodo aliqua culpa
					ut laboris nisi non culpa.
				</P>
			</div>
		</div>
	</Section>
</Main>
