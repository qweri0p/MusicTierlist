<script lang="ts">
    import Hamburger from "$lib/sidebar/Hamburger.svelte";
    import Menu from "$lib/sidebar/Menu.svelte";
    import { fly } from "svelte/transition";
    import { open } from "./Sidebar";
</script>

<Hamburger bind:open={$open}/>

{#if $open}
    <main transition:fly={{x: -200}}>
        <Menu/>
    </main>
{/if}

<style>
    main{
        position: absolute;
        z-index: 69420;
    }
</style>