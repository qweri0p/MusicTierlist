<script lang="ts">
    import Album from "$lib/Album.svelte";
    export let data;
</script>
  
<main>
    {#each data.records as album}
        <Album data={album}/>
    {/each}
</main>

<style>
    main {
    padding: 0.5vmax;
    height: 10vmin;
    width: 100%;
    }
</style>