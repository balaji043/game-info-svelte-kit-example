<script lang="ts">
	import type { IGame } from '$lib/utils/data';
	export let game: IGame;
	const { href, img, name, price, description } = game;
</script>

<a {href} class="card">
	<figure class="relative rounded">
		<img class="" src={img.sm} alt={name} />
		<div class="top-0 left-0 absolute z-10 w-full h-full hover:bg-slate-400/50"/>
	</figure>
	<div class="card-body p-0 pt-2 overflow-ellipsis whitespace-nowrap overflow-hidden">
		<h2 class="card-title mb-0">
			{name}
		</h2>
		<p>{description}</p>
		<div class="mt-2 mb-2">
			{#if price.isFree}
				<div class="badge badge-accent">FREE</div>
			{:else if price.discount === 0}
				<div>₹{price.actualPrice}</div>
			{:else}
				<div class="flex gap-3 align-middle items-center">
					<div class="badge badge-accent">-{price.discount}%</div>
					<div class="line-through">₹{price.actualPrice}</div>
					<div>₹{price.discountedPrice}</div>
				</div>
			{/if}
		</div>
	</div>
</a>
