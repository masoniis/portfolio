<script lang="ts">
	import Projects from "./components/Projects.svelte";
	import Skills from "./components/Skills.svelte";
	import Header from "./components/Header.svelte";
	import About from "./components/About.svelte";
</script>

<svelte:head>
	<title>Mason Bott</title>
	<meta
		name="description"
		content="Software engineer. Passion for perfection, problem solving, and the intricasies of computers"
	/>
</svelte:head>

<container
	class="text-primaryfg min-h-screen flex flex-col space-y-8 lg:flex-row max-w-7xl mx-auto lg:space-x-16 lg:space-y-0"
>
	<span class="min-h-full lg:flex-1">
		<span class="sticky top-0">
			<Header />
		</span>
	</span>
	<div
		class="flex-1 flex flex-col pt-16 sm:pt-24 overflow-hidden text-dynamicp text-primaryfg/60 space-y-10"
	>
		<About />

		<Projects />

		<Skills />

		<div class="flex flex-col">
			<h3
				class="text-dynamich6 font-extrabold border-primaryaccentbg/80 border-b-2 text-primaryfg"
			>
				Get in touch
			</h3>
			<spacer class="h-4"></spacer>
			<p>masonmbott@gmail.com</p>
		</div>
	</div>
</container>
