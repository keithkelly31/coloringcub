<hgroup>
	<h1>Coloring Cub</h1>
	<h2>Coloring pages and books for kids of all ages</h2>
</hgroup>

<h3>Hello</h3>
<p>
	Thank you for visiting Coloring Cub! This site is dedicated to providing fun, educational coloring
	pages, coloring books, children's books, stickers, and more.
</p>
<p>
	Our journey is just beginning, but we are excited to share our designs and vision with you. We
	plan to expand this site into an exciting place to learn, share, and grow our creativity. In the
	mean time we encourage you to follow us on our social media channels linked below.
</p>
<section class="socials">
	<a class="etsy" href="https://coloringcub.etsy.com">
		<i>E</i>
		<span>Etsy</span>
	</a>

	<a href="https://www.facebook.com/coloringcub">
		<i class="bi-facebook"></i>
		<span>Facebook</span>
	</a>

	<a href="https://www.instagram.com/coloringcub/">
		<i class="bi-instagram"></i>
		<span>Instagram</span>
	</a>

	<a href="https://www.pinterest.com/coloringcub">
		<i class="bi-pinterest"></i>
		<span>Pinterest</span>
	</a>
</section>

<style lang="scss">
	@use 'sass:map';
	@use '@picocss/pico/scss/settings';

	i {
		font-size: calc(var(--pico-font-size) * 2);
	}

	.etsy i {
		font-family: serif;
		font-style: normal;
	}

	.socials {
		display: flex;
		gap: calc(var(--pico-block-spacing-horizontal) * 2);
	}

	.socials a {
		align-items: center;
		display: flex;
		flex-direction: column;
		text-decoration: none;
	}

	.socials a span {
		display: none;
		text-decoration: var(--pico-text-decoration);
	}

	@media screen and (min-width: map.get(settings.$breakpoints, md, breakpoint)) {
		.socials a span {
			display: inline;
		}
	}
</style>
