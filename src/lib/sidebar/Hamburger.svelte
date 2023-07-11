<script lang="ts">
	export let open = false
</script>

<!-- Adapted from https://dev.to/joshnuss/creating-a-sidebar-menu-in-svelte-ih2 -->

<button class:open on:click={() => open = !open}>
	<svg width=32 height=24>
		<line id="top" x1=0 y1=2  x2=32 y2=2/>
		<line id="middle" x1=0 y1=12 x2=32 y2=12/>
		<line id="bottom" x1=0 y1=22 x2=32 y2=22/>
	</svg>
</button>

<style>
	svg {
		min-height: 24px;
		transition: transform 0.3s ease-in-out;
	}
	
	svg line {
		stroke: currentColor;
		stroke-width: 3;
		transition: transform 0.3s ease-in-out;
        opacity: 1;
	}
	
	button {
        border: none;
        outline: none;
        color: white;
		z-index: 20;
        background-color: #292929;
	}
	
	.open svg {
		transform: scale(0.7)
	}
	
	.open #top {
		transform: translate(6px, 0px) rotate(45deg)
	}
	
	.open #middle {
        opacity: 0;
		transition: opacity 0.3s linear;
	}
	
    .open #bottom {
		transform: translate(-12px, 9px) rotate(-45deg)
	}
</style>