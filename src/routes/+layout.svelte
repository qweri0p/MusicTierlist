<script lang="ts">
     import Sidebar from "$lib/sidebar/Sidebar.svelte";
</script>

<Sidebar/>
<div>
     <slot/>
</div>

<style>
     div{
          padding: 3vmin;
     }
</style>