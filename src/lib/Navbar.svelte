<script lang="ts">
    import { tags } from "../data/parser";
    import { fly, fade } from "svelte/transition";
    let visible = false;
</script>

<div>
    <input type="checkbox" on:click={() => visible = !visible}/>
    <span id="n1"></span>
    <span id="n2"></span>
    <span id="n3"></span>
    <!--TODO: NOT MAKE THIS FUCKING TERRIBLE, USE SVG ANIMATIONS PERHAPS-->
</div>
{#if visible}
    <main in:fly={{duration:500, x:-150, delay:0}} out:fade>
        <ul>
            <li><a data-sveltekit-reload href="/">home</a></li>
            {#each tags as tag}
                <li><a data-sveltekit-reload href="/{tag}">{tag}</a></li>
            {/each}
        </ul>
    </main>
{/if}

<style>
    ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
    }
    main {
        font-size: larger;
        position: absolute;
        float: right;
        background-color: #1b1b1b;
        height:max-content;
        padding: 2vmin;
    }
    li {
        padding: 0.5vmin;
    }
    a {
        text-decoration-style: dotted;
        color: #dedede;
        text-decoration-color: #dedede;
    }
    input {
        display: block;
        width: 40px;
        height: 32px;
        position: absolute;
        top: .6vmin;
        left: .5vmin;
        
        cursor: pointer;
        
        opacity: 0; /* hide this */
        z-index: 2; /* and place it over the hamburger */
        
        -webkit-touch-callout: none;
    }
    span {
        display: block;
        width: 33px;
        height: 4px;
        margin-bottom: 5px;
        position: relative;
  
        background: #dedede;
        border-radius: 3px;
  
        z-index: 1;
  
        transform-origin: 4px 0px;
  
        transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
        background 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
        opacity 0.55s ease;
    }
    #n1 {
        transform-origin: 0% 0%;
    }
    #n3 {
        transform-origin: 0% 100%;
    }
    input:checked ~ #n1 {
        transform: rotate(45deg) translate(-2px, -4px);
        background: #dedede;
        opacity: 1;
    }
    input:checked ~ #n2 {
        opacity: 0;
        transform: rotate(0deg) scale(0.2, 0.2);
    }
    input:checked ~ #n3 {
        transform: rotate(-45deg) translate(0, -2px);
    }
    div {
        margin-top: 1vmin;
        padding-top: 1vmin;
        margin-left: 1vmin;
    }
</style>