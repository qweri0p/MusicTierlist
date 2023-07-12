<script lang="ts">
    import { goto } from "$app/navigation";
    import { topics } from "$lib/data/parser";
</script>

<h1>WOW THIS FUCKING SUCKS</h1>
<h3>TODO: Make the /genre, /artist and home pages have good buttons.</h3>
<h3>TODO: Make the error pages not trash. Get a button to go back or smthng.</h3>
<h3>TODO: Properly style the sidebar and make it not ridiculously long. Perhaps create dropdowns within the sidebar.</h3>

{#each topics as thing}
    <button on:click={() => goto(thing)}>{thing}</button>
{/each}