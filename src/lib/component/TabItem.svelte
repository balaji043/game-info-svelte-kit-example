<script lang="ts">
	import { page } from '$app/stores';
	export let href;
	export let name;
	$: isActive = $page.path.includes(href);
</script>

<a class="tab" {href} class:tab-active={isActive}>{name}</a>
