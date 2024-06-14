<script lang="ts">
	import '@/app.pcss';
	import type { Snippet } from 'svelte';

	type Props = {
		children: Snippet;
	};

	const { children }: Props = $props();
</script>

{@render children()}
