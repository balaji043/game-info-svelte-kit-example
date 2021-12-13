<script lang="ts">
	import { CAROUSEL_GAMES } from '$lib/utils/data';
	import { onDestroy, onMount } from 'svelte';

	let currentGameIndex = 0;
	$: currentGame = CAROUSEL_GAMES[currentGameIndex];
	let interval;
	onMount(() => {
		interval = setInterval(() => {
			if (currentGameIndex === CAROUSEL_GAMES.length - 1) {
				currentGameIndex = 0;
			} else {
				currentGameIndex++;
			}
		}, 10000);
	});
	onDestroy(() => {
		clearInterval(interval);
	});
</script>

<section class="grid grid-cols-12 gap-4">
	<div class="col-span-10">
		<div class="card image-full">
			<figure>
				<img src={currentGame.img.lg} alt={currentGame.name} />
			</figure>
			<div class="card-body justify-end w-72">
				<p class="card-title NeonText1">{currentGame.name}</p>
				<p class="NeonText2">{currentGame.description}</p>
				<div class="card-actions">
					<a class="btn btn-primary" href={currentGame.href}>BUY NOW</a>
				</div>
			</div>
		</div>
	</div>
	<div class="col-span-2">
		<div class="flex flex-col h-full justify-between">
			{#each CAROUSEL_GAMES as game, i}
				<button
					class="btn btn-ghost flex-col py-8 pr-8 gap-2 content-start align-middle relative"
					class:btn-active={currentGameIndex === i}
					on:click={() => {
						currentGameIndex = i;
					}}
				>
					<img class="w-10 h-16 object-cover rounded-md z-10" src={game.img.sm} alt={game.name} />
					<span class="text-left align-middle text-xs z-10">{game.name}</span>
				</button>
			{/each}
		</div>
	</div>
</section>

<style>
	.NeonText1 {
		color: rgb(255, 255, 255);
		text-shadow: 0 0 7px #fff, 0 0 10px #fff, 0 0 21px #fff, 0 0 42px #0fa, 0 0 82px #0fa,
			0 0 92px #0fa, 0 0 102px #0fa, 0 0 151px #0fa;
	}
	.NeonText2 {
		color: rgb(255, 255, 255);
		text-shadow: 0 0 7px #fff, 0 0 10px #fff, 0 0 21px #fff, 0 0 42px #0fa, 0 0 82px #0fa,
			0 0 92px #0fa, 0 0 102px #0fa, 0 0 151px #0fa;
	}
</style>
