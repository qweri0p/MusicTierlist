<script lang="ts">
    import { page } from "$app/stores";
</script>

<h1>{$page.status}</h1>
<p>{$page.error?.message}</p> <!--WHY. DOES. THIS. FUCKING. STORE NEED A FUCKING ?. THIS IS THE ERROR FILE SO OF COURSE AN ERROR EXISTS!!!!-->
<p>The link "{$page.url}" is incorrect.</p>
<p>Click <a href="/"><i><b>here</b></i></a> to go back to the main page.</p>

<style>
    a{
        color: #CEC8BB;
        text-decoration: dashed underline;
    }
</style>
