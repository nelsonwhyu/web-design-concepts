<script>
	import '../app.css';
	import Header from '../components/header/header.svelte';

	import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit';
	injectSpeedInsights();
</script>

<Header class="sticky top-0 z-50 text-primary backdrop-blur" />
<slot />
