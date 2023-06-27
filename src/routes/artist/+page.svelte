<script lang="ts">
    import { goto } from "$app/navigation";
    import { artists } from "$lib/data/parser";
</script>

{#each artists as artist}
    <button on:click={() => goto("artist/"+artist)}>{artist}</button>
{/each}