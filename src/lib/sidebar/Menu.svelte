<script lang="ts">
    import { artists, tags } from "$lib/data/parser";
    import { topic, open } from "$lib/Sidebar";
    const options = $topic==="artist" ? artists:tags;
</script>

<div>
    Amogus<br>
    {#each options as option}
        <a href="{option}" on:click={() =>{open.set(!$open)}}>{option}</a><br>
    {/each}
</div>

<style>
    div{
        color: red;
        background-color: #1b1b1b;
    }
</style>