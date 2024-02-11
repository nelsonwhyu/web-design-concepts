<div
	id="concept-hex"
	class={`${$$props.class} flex h-[90svh] w-full flex-col items-center justify-center `}
>
	<div class="absolute flex h-full w-full items-center justify-center overflow-clip">
		<div class="light-center"></div>
		<div class="grid"></div>
	</div>
	<p
		class="z-50 flex h-full flex-col justify-center gap-32 text-center font-['Anton'] text-3xl tracking-wide md:text-[5vw]"
	>
		<span class="h-min">DESIGN CONCEPTS</span>
	</p>
</div>

<style>
	.grid {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: 0;
		background-size: 500px;
		background-image: url('./hexagon-grid.svg');
	}

	.light-center {
		width: 40em;
		height: 40em;
		filter: blur(15px);
		border-radius: 50%;
		background: linear-gradient(90deg, #06185e 0%, #0e443b 100%);
		z-index: 0;
		animation-name: hexSpread, hueRotation;
		animation-duration: 5s, 10s;
		animation-iteration-count: 1, infinite;
		animation-direction: normal, alternate;
		transition-timing-function: ease-in-out, initial;
	}

	@keyframes hexSpread {
		from {
			opacity: 0%;
			transform: scale(0.1);
			transform-origin: center;
		}
		to {
			opacity: 100%;
			transform: scale(1);
			transform-origin: center;
		}
	}
	@keyframes hueRotation {
		from {
			filter: hue-rotate(0deg);
		}
		to {
			filter: hue-rotate(360deg);
		}
	}
</style>
