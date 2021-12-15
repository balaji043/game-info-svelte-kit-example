<script lang="ts">
	import SideNavItem from './SideNavItem.svelte';
	import { QUICK_LAUNCH_GAMES } from '$lib/utils/data';
	import Tag from '../icons/Tag.svelte';
	import Library from '../icons/Library.svelte';
	import UnrealEngine from '../icons/UnrealEngine.svelte';
</script>

<div class="drawer-side">
	<label for="my-drawer" class="drawer-overlay" />
	<div class="menu p-1 overflow-y-auto w-64 bg-base-100">
		<div class="flex w-full flex-col">
			<img class="aspect-square w-11 self-center" src="/favicon.png" alt="Epic Games Icon" />
			<ol class="mt-4">
				<SideNavItem href="/store/discover" pathToCheck="/store" name="Store">
					<Tag />
				</SideNavItem>
				<SideNavItem href="/library" name="Library">
					<Library />
				</SideNavItem>
				<SideNavItem href="/unreal-engine" name="Unreal Engine">
					<UnrealEngine />
				</SideNavItem>
				<p class="mt-12 pl-5 text-xs font-bold uppercase">Quick Launch</p>
				{#each QUICK_LAUNCH_GAMES as game}
					<li>
						<a class="flex gap-6 align-middle" href={game.href}>
							<img class="w-10 h-16 object-cover rounded-md" src={game.img.sm} alt={game.name} />
							<p>{game.name}</p>
						</a>
					</li>
				{/each}
			</ol>
		</div>
	</div>
</div>
