declare namespace svelte.JSX {
	interface HTMLAttributes<T> {
		enterViewport?: () => void;
		exitViewport?: () => void;
	}
}