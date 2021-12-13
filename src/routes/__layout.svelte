<script lang="ts">
	import SideNavBar from '$lib/component/SideNavBar/SideNavBar.svelte';
</script>

<div class="drawer drawer-mobile min-h-screen">
	<input id="my-drawer" type="checkbox" class="drawer-toggle" />
	<div class="drawer-content border-l-2">
		<slot />
	</div>
	<SideNavBar />
</div>

<style lang="postcss">
	@tailwind base;
	@tailwind components;
	@tailwind utilities;
	::-webkit-scrollbar {
		width: 10px;
	}

	::-webkit-scrollbar-track {
		background-color: darkgrey;
	}

	::-webkit-scrollbar-thumb {
		box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
	}
</style>
