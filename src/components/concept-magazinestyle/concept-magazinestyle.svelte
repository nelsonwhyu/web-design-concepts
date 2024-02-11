<script>
	import photo from './grand_central_color.png';
</script>

<div
	id="concept-3"
	class={`${$$props.class} flex flex-col items-center gap-10 md:h-[100svh] md:flex-row`}
>
	<div
		class="z-30 flex w-full flex-col gap-10 px-10 py-10 text-center md:absolute md:left-1 md:w-[60vw] md:pl-40 md:text-left"
	>
		<p class="text-[10vw] md:text-[3vw]">
			I turn <span class="italic opacity-70">Ideas</span> into real
			<span class="font-bold">Products</span>.
		</p>
		<p class="w-full text-justify md:flex md:w-[35vw] md:pr-[20%]">
			I have worn many hats in my career, from technical support, sales, software engineer to
			product manager. For me, these experience are all tools in my toolbox to serve one goal - to
			bring product from idea to reality.
		</p>
	</div>
	<div
		class="flex aspect-video opacity-50 grayscale md:absolute md:right-0 md:h-[90svh] md:w-[60vw] dark:grayscale-0"
	>
		<img src={photo} alt="" />
	</div>
</div>
