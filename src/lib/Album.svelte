<script lang="ts">
    import Popover from "$lib/Popover.svelte";
    import type { album } from "$lib/data/parser";
    let visible = false
    export let data:album;
</script>

<img src="{data.image}" alt="{data.name}" on:keydown={() => {console.log("what?")}} on:click={() => {visible = true}}>

<Popover {data} bind:visible={visible}/>

<style>
    img {
        padding: 0.25vmin;
        height: 14vmin;
        width: 14vmin;
        transition: ease-in-out;
    }
    img:hover {
        transform: scale(1.03);
    }
</style>