<script lang="ts">
    import { goto } from "$app/navigation";
    const gotos = ["artist", "genre"]
</script>

<h1>WOW THIS FUCKING SUCKS</h1>
<h3>ignore the hamburger menu please🥺</h3>
<h1>TODO: Fix this fucking burger menu.  I hate it.</h1>
<h1>ALSO TODO: Make albums wrap. This sucks otherwise.</h1>
<h1>YET ANOTHER TODO: Fix the fucking navbar. Best would be a total rewrite.</h1>

{#each gotos as thing}
    <button on:click={() => goto(thing)}>{thing}</button>
{/each}