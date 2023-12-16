<script>
	import Heading from '$components/dynamic/heading.svelte';
	import Main from '$components/elements/main.svelte';
	import P from '$components/elements/p.svelte';
	import Section from '$components/elements/section.svelte';
	// import EmailSubscription from '$components/forms/email-subscription.svelte';
</script>

<Main>
	<Section class="grid place-content-center">
		<enhanced:img src="../assets/logo-sticker.png?w=300" alt="Cute colorful bear cub" />
	</Section>

	<Heading class="text-center" type="h1">Coloring Cub</Heading>

	<P>
		Hello, and welcome to our colorful world! We're Keith and Lynn, the creative minds behind
		Coloring Cub. In our world of artistic expression, we're on a mission to spread creativity and
		fun to all ages through our handcrafted coloring pages, coloring books, children's books,
		stickers, and more.
	</P>

	<!-- <P>
		We are just starting, but we are excited to launch our designs. You can stay current on what we
		are developing through our social media channels below, or we encourage you to subscribe to our
		email list.
	</P> -->

	<P>
		We are just starting, but we are excited to launch our designs. You can stay current on what we
		are developing through our social media channels below.
	</P>

	<Section class="flex gap-8 justify-center">
		<a
			class="text-di-serria-base hover:text-di-serria-dark"
			href="https://www.facebook.com/coloringcub"
		>
			<i class="bi-facebook text-4xl"></i>
		</a>

		<a
			class="text-keppel-base hover:text-keppel-dark"
			href="https://www.instagram.com/coloringcub/"
		>
			<i class="bi-instagram text-4xl"></i>
		</a>

		<a class="text-plum-base hover:text-plum-dark" href="https://www.pinterest.com/coloringcub">
			<i class="bi-pinterest text-4xl"></i>
		</a>

		<a class="text-galliano-base hover:text-galliano-dark" href="https://twitter.com/coloringcub">
			<i class="bi-twitter-x text-4xl"></i>
		</a>
	</Section>

	<!-- <EmailSubscription /> -->
</Main>
