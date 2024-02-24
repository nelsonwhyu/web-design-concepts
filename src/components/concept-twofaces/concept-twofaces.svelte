<script>
	import portrait from './portrait.png';
	import BgHexagon from './bg-hexagon.svelte';
</script>

<div
	id="concept-2"
	class={`${$$props.class} flex h-[90svh] w-full flex-col items-center justify-center gap-10`}
>
	<BgHexagon class="hidden xl:block  absolute z-20 h-full w-full" />
	<div
		class="pointer-events-none absolute flex w-full flex-row items-center gap-10 py-10 tracking-widest"
	>
		<div
			class="pointer-events-none z-30 basis-1/2 text-wrap text-center font-['Anton'] text-3xl md:text-[3.5vw]"
		>
			PRODUCT THINKING
		</div>
		<div
			class="pointer-events-none z-30 basis-1/2 text-wrap text-center font-['Anton'] text-3xl md:text-[3.5vw]"
		>
			WEB DEVELOPER
		</div>
	</div>
	<div class="pointer-events-none z-20 flex h-full w-full items-center justify-center">
		<img class="h-full object-contain" src={portrait} alt="" />
	</div>
</div>
