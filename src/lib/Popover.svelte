<script lang="ts">
    import { cubicOut } from 'svelte/easing'
    import { open } from '$lib/sidebar/SidebarStore';
    import type { album } from '$lib/data/parser';
    export let data:album;
    export let visible = false;

    function blurFade(node: Element, {
        duration = 500,
        delay = 0,
        x = 0,
        y = 10,
        easing = cubicOut
    }) {
        const o = +getComputedStyle(node).opacity;
        const transform = getComputedStyle(node).transform === 'none' ? '' : getComputedStyle(node).transform;
        return {
            duration,
            delay,
            easing,
            css: (t: number) => {
                return `
                    opacity: ${t * o};
                    backdrop-filter: blur(${50*t});
                    transform: ${transform} translate(${(1 - t) * x}px, ${(1 - t) * y}px);
                `
            }
        }
    }

    $: if (visible === true) {open.set(false)}
</script>

{#if visible}
    <div id="container" transition:blurFade="{{duration:500}}">
        <span id="item-4"><i>{data.name}</i><br><span id="artist">by "{data.artist}"</span></span>
        <img id="item-1" src="{data.image}" alt="{data.name} cover" on:keydown={() => {console.log("what?")}} on:click={() => {visible = false}}>
        <a href="{data.bandcamp}" target="_blank" rel="noopener noreferrer" id="item-3">Bandcamp</a>
        <button id="item-2" on:click={() => {visible = false}}>X</button>
        <p id="item-0">{data.description}</p>
    </div>
{/if}

<style>
    #container {
        position: fixed;
        color: antiquewhite;
        top: 0;
        left: 0;
        display: grid;
        grid-template-rows: 10vmin 55vmin 15vmin;
        grid-template-columns: 90vmin 35vmin;
        padding: 10vmin;
        height: 100vmin;
        width: 1000vmin;
        backdrop-filter: blur(25px);
        white-space: nowrap;
    }
    #item-0 {
        grid-row: 3 / 4;
        grid-column: 1 / 3;
        font-size: 3vmin;
        white-space: normal;
    }
    #item-1 {
        grid-row: 2 / 3;
        grid-column: 1 / 2;
        height: 55vmin;
    }
    #item-2 {
        background-color: #ff4343; 
        margin: 5vmin;
        grid-row: 2 / 3;
        grid-column: 2 / 3;
        font-size: 25vmin;
    }
    #item-3 {
        /* background-color: #3d3d3d;  */
        grid-row: 1 / 2;
        grid-column: 2 / 3;
        font-size: 5vmin;
        text-align: center;
        margin: 5vmin;
        color: antiquewhite;
        line-height: 10vmin;
        text-decoration: underline antiquewhite;
    }
    #item-4 {
        grid-row: 1 / 2;
        grid-column: 1 / 2;
        font-size: 5vmin;
        line-height: 5vmin;
    }
    #item-2:active {
        background-color: #130200;
    }
    #artist {
        font-size: 3vmin;
    }
</style>