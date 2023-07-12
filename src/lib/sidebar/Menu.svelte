<script lang="ts">
    import { artists, tags } from "$lib/data/parser";
    type topics = "artist"|"genre"
    export let topic:topics;
    const options = topic==="artist" ? artists:tags;

</script>

<div>
    Amogus<br>
    {#each options as option}
        <a href="{option}">{option}</a><br>
    {/each}
</div>

<style>
    div{
        color: red;
        background-color: #1b1b1b;
    }
</style>