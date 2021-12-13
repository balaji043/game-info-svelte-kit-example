<script>
	import Back from '../icons/Back.svelte';
	import People from '../icons/People.svelte';
	import Search from '../icons/Search.svelte';
	import TabItem from '../TabItem.svelte';
	let search;
</script>

<div class="navbar my-2 text-neutral-content ">
	<div class="navbar-start gap-2">
		<div class="flex-none">
			<button class="btn btn-square btn-ghost">
				<Back />
			</button>
		</div>
		<div class="form-control">
			<div class="relative">
				<button
					class="absolute top-0 right-0 
					rounded-l-none btn btn-ghost rounded-full"
					on:click={() => {
						console.log(search);
					}}
				>
					<Search />
				</button>
				<input
					type="text"
					placeholder="Search"
					class="w-full pr-16 input input-bordered rounded-full"
					bind:value={search}
				/>
			</div>
		</div>
		<slot />
	</div>
	<div class="navbar-end gap-2">
		<div class="tabs">
			<TabItem href="/store/wishlist" name="Wishlist" />
			<TabItem href="/store/cart" name="Cart" />
		</div>
		<div class="divider divider-vertical" />
		<div class="indicator">
			<div class="indicator-item indicator-start">
				<p class="badge badge-primary">2</p>
			</div>
			<button class="btn btn-square btn-ghost">
				<People />
			</button>
		</div>
		<button class="btn btn-circle text-lg">Cb</button>
	</div>
</div>
