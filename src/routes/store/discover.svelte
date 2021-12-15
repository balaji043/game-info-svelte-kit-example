<script>
	import StoreCarousel from '$lib/component/carousel/StoreCarousel.svelte';
	import GameCardMd2 from '$lib/component/game-cards/GameCardMd.svelte';
	import { ON_SALE_GAMES } from '$lib/utils/data';
</script>

<div class="px-8 flex flex-col gap-8">
	<StoreCarousel />
	<section>
		<div class="flex items-center justify-between pb-4">
			<a class="flex items-center group" href="/">
				<span class="text-2xl">Game On Sale</span>
				<span class="text-sm pl-2 transition-all group-hover:pl-4">❯</span>
			</a>
			<div class="flex gap-3">
				<button class="btn btn-circle">❮</button>
				<button class="btn btn-circle">❯</button>
			</div>
		</div>
		<div class="carousel gap-2">
			{#each ON_SALE_GAMES as game}
				<div class="carousel-item">
					<GameCardMd2 {game} />
				</div>
			{/each}
		</div>
	</section>
	<div class="mt-96" />
</div>
