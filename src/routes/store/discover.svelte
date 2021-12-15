<script>
import GameSliderSection from '$lib/component/store/GameSliderSection.svelte';

	import StoreCarousel from '$lib/component/store/StoreCarousel.svelte';
	import { ON_SALE_GAMES } from '$lib/utils/data';
</script>

<div class="px-8 flex flex-col gap-8">
	<StoreCarousel />
	<GameSliderSection />
</div>
