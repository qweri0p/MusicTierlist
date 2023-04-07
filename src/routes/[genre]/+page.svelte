<script lang="ts">
  import Tier from "../../lib/Tier.svelte";
  type listoftiers = "s"|"a"|"b"|"c"|"d"|"e"
  const tiers:listoftiers[] = ['s', 'a', 'b', 'c', 'd', 'e'];
  export let data;

</script>

<main>
  {#each tiers as tier}
    <Tier tier={tier} tag={data.genre}/>
    <br>
  {/each}
</main>

<style>
    main {
      padding: 0.5vmax;
      height: 10vmin;
      width: 100%;
      white-space: nowrap;
    }
  </style>