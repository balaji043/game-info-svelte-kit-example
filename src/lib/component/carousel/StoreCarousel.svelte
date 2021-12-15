<script lang="ts">
	import { CAROUSEL_GAMES } from '$lib/utils/data';
	import { tweened } from 'svelte/motion';
	import { linear } from 'svelte/easing';
	import { onDestroy, onMount } from 'svelte';
	const createTweenedProgress = () =>
		tweened(0, {
			duration: 600,
			easing: linear
		});
	let progress = createTweenedProgress();
	let currentGameIndex = 0;
	$: currentGame = CAROUSEL_GAMES[currentGameIndex];
	let interval;
	onMount(() => {
		interval = setInterval(() => {
			let s = $progress.valueOf();
			console.log(s);
			if (s >= 1) {
				if (currentGameIndex === CAROUSEL_GAMES.length - 1) {
					currentGameIndex = 0;
				} else {
					currentGameIndex++;
				}
				progress = createTweenedProgress();
			} else progress.update((v) => v + 0.1);
		}, 400);
	});
	onDestroy(() => {
		clearInterval(interval);
	});
</script>

<div class="grid grid-cols-12 gap-4">
	<div class="col-span-10">
		<div class="card image-full">
			<figure>
				<img src={currentGame.img.lg} alt={currentGame.name} />
			</figure>
			<div class="card-body justify-end w-72">
				<p class="card-title">{currentGame.name}</p>
				<p>{currentGame.description}</p>
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
					on:click={() => {
						currentGameIndex = i;
					}}
				>
					<img class="w-10 h-16 object-cover rounded-md z-10" src={game.img.sm} alt={game.name} />
					<span class="text-left align-middle text-xs z-10">{game.name}</span>
					{#if game.name === currentGame.name}
						<div
							class="absolute top-0 left-0 h-full bg-gray-400/40 z-0 rounded"
							style="width: {$progress * 100}%;"
						/>
					{/if}
				</button>
			{/each}
		</div>
	</div>
</div>

<style>
	.Neon {
		text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #e60073;
	}
</style>
