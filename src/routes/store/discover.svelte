<script>
	import StoreCarousel from '$lib/component/carousel/StoreCarousel.svelte';
	import { ON_SALE_GAMES } from '$lib/utils/data';
</script>

<div class="px-8 flex flex-col gap-8">
	<StoreCarousel />
	<section class="grid grid-cols-5 gap-4">
		{#each ON_SALE_GAMES as game}
			<div class="card">
				<figure>
					<img class="rounded" src={game.img.sm} alt={game.name} />
				</figure>
				<div class="flex flex-col gap-3 pb-2">
					<h2 class="font-bold text-2xl">{game.name}</h2>
					<p class="overflow-ellipsis whitespace-nowrap overflow-hidden">{game.description}</p>
					{#if game.price.isFree}
						<div class="badge badge-accent">FREE</div>
					{:else if game.price.discount === 0}
						<div>₹{game.price.actualPrice}</div>
					{:else}
						<div class="flex gap-3 align-middle items-center">
							<div class="badge badge-accent">-{game.price.discount}%</div>
							<div class="line-through">₹{game.price.actualPrice}</div>
							<div>₹{game.price.discountedPrice}</div>
						</div>
					{/if}
				</div>
			</div>
		{/each}
	</section>
</div>
