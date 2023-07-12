<script lang="ts">
    import { goto } from "$app/navigation";
    import { artists, tags } from "$lib/data/parser";
    export let data
    const objects = data.params.topic === "artist" ? artists : tags
</script>

{#each objects as object}
    <button on:click={() => goto(data.params.topic+"/"+object)}>{object}</button>
{/each}