<script lang="ts">
    import { tags } from "$lib/data/parser";
    import { goto } from "$app/navigation";
</script>

<h1>WOW THIS FUCKING SUCKS</h1>
<h3>click one of the buttons below to see the tierlist i guess</h3>
<h3>still no back button cuz i dont care</h3>
{#each tags as tag}
    <button on:click={() => goto(tag)}>{tag}</button>
{/each}