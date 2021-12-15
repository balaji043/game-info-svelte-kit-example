<script>
	import StoreCarousel from '$lib/component/carousel/StoreCarousel.svelte';
	import GameCardMd from '$lib/component/game-cards/GameCardMd.svelte';
	import { ON_SALE_GAMES } from '$lib/utils/data';
</script>

<div class="px-8 flex flex-col gap-8">
	<StoreCarousel />
	<section class="grid grid-cols-5 gap-4">
		{#each ON_SALE_GAMES as game}
			<GameCardMd {game} />
		{/each}
	</section>
</div>
