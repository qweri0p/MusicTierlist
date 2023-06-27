<script lang="ts">
    import { goto } from "$app/navigation";
    import { tags } from "$lib/data/parser";
</script>

{#each tags as tag}
    <button on:click={() => goto("genre/"+tag)}>{tag}</button>
{/each}