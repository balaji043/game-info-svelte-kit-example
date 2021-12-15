<script lang="ts">
	import { CAROUSEL_GAMES } from '$lib/utils/data';
	import { tweened } from 'svelte/motion';
	import { linear } from 'svelte/easing';
	import { onDestroy, onMount } from 'svelte';
	import { fly } from 'svelte/transition';
	import { IntervalTimer } from '$lib/utils/IntervalTimer';
	import viewport from '$lib/actions/viewport';
	const createTweenedProgress = () =>
		tweened(0, {
			duration: 700,
			easing: linear
		});
	let progress = createTweenedProgress();
	let currentGameIndex = 0;
	$: currentGame = CAROUSEL_GAMES[currentGameIndex];
	let intervalTimer = new IntervalTimer(() => {
		let s = $progress.valueOf();
		if (s >= 1) {
			if (currentGameIndex === CAROUSEL_GAMES.length - 1) {
				currentGameIndex = 0;
			} else {
				currentGameIndex++;
			}
			progress = createTweenedProgress();
		} else {
			progress.update((v) => v + 0.1);
		}
	}, 400);

	onMount(() => {
		intervalTimer.start();
	});
	onDestroy(() => {
		intervalTimer.clear();
	});
</script>

<div class="grid grid-cols-12 gap-4 h-min">
	<div
		class="col-span-10"
		use:viewport
		on:enterViewport={() => intervalTimer.resume()}
		on:exitViewport={() => intervalTimer.pause()}
	>
		{#key currentGame}
			<div class="card image-full">
				<figure in:fly={{ x: 100, duration: 1000 }} class="h-min">
					<img src={currentGame.img.lg} alt={currentGame.name} />
				</figure>
				<div class="card-body justify-end w-72" in:fly={{ x: 500, duration: 1000 }}>
					<p class="card-title">{currentGame.name}</p>
					<p>{currentGame.description}</p>
					<div class="card-actions">
						<a class="btn btn-primary" href={currentGame.href}>BUY NOW</a>
					</div>
				</div>
			</div>
		{/key}
	</div>
	<div class="col-span-2">
		<div class="flex flex-col h-full justify-between">
			{#each CAROUSEL_GAMES as game, i}
				<button
					class="btn btn-ghost flex-col py-8 pr-8 gap-2 content-start align-middle relative"
					on:click={() => {
						if (currentGameIndex !== i) {
							currentGameIndex = i;
							progress = createTweenedProgress();
						}
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
