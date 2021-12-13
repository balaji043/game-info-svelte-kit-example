<script lang="ts">
	import { page } from '$app/stores';

	export let href: string;
	export let name: string;
	export let pathToCheck = '';
	$: isActive = isActiveLink($page.path);

	const isActiveLink = (path: string) => {
		if (pathToCheck) return path.includes(pathToCheck);
		else return path.includes(href);
	};
</script>

<li>
	<a class="flex gap-6 mt-1" class:active={isActive} {href}>
		<slot />
		<span>{name}</span>
	</a>
</li>
