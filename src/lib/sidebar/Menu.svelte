<script lang="ts">
    import { artists, tags } from "$lib/data/parser";
    import { open } from "$lib/sidebar/SidebarStore";
</script>

<div>
    <a class="bigopts" href="/">Home</a><br><br>
    <a class="bigopts" href="/artist">Artist</a><br>
    {#each artists as option}
        <a href="/artist/{option}" on:click={() =>{open.set(!$open)}}>{option}</a><br>
    {/each}<br><a class="bigopts" href="/genre">Genre</a><br>
    {#each tags as option}
        <a href="/genre/{option}" on:click={() =>{open.set(!$open)}}>{option}</a><br>
    {/each}
</div>

<style>
    div{
        color: red;
        background-color: #1b1b1b;
        padding: 3vmin;
    }
    .bigopts{
        font-size: larger;
    }
    a{
        color: #f3f3f3;
    }
</style>