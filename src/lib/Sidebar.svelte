<script lang="ts">
    import Hamburger from "$lib/sidebar/Hamburger.svelte";
    import Menu from "$lib/sidebar/Menu.svelte";
    import { fly } from "svelte/transition";
    let open:boolean
</script>

<Hamburger bind:open/>

{#if open}
    <main transition:fly={{x: -200}}>
        <Menu/>
    </main>
{/if}