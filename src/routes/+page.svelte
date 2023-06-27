<script lang="ts">
    import { goto } from "$app/navigation";
    const gotos = ["artist", "genre"]
</script>

<h1>WOW THIS FUCKING SUCKS</h1>
<h3>ignore the hamburger menu please🥺</h3>

{#each gotos as thing}
    <button on:click={() => goto(thing)}>{thing}</button>
{/each}