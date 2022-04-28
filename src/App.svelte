<script>
	import { data } from "./functions/store";

	import Header from "./components/templates/header.svelte";
	import Footer from "./components/templates/footer.svelte";
	import Form from "./components/templates/form.svelte";
	import Results from "./components/templates/results.svelte";
	import { compile } from "./functions/compiler";

	/**
	 * @type { Array<Object<string, string|number>> }
	 */
	let textData;

	data.subscribe((value) => {
		textData = compile(value);
	});

	$: {
		textData = textData;
	}
</script>

<Header />

<main class="main">
	<section class="main__inner main__inner--width">
		<div class="width">
			<h2>Convertidor de texto a tabla HTML</h2>
			<p>
				Pegue su texto desde WhatsApp y conviértalo en una tabla HTML.
			</p>
		</div>
	</section>

	<section class="main__inner main__inner--form">
		<Form />
		<Results {textData} />
	</section>
</main>

<Footer />
