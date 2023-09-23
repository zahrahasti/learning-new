<script>
   export let showFooter=true;
    let textWhite=true;
   export let message;
</script>
{#if showFooter}
<div class:show={showFooter} on:click|self>
    <!-- putting svelte in the module that we defined in here -->
    <slot name="title"></slot>
    <slot></slot>
    
    <!-- <p class:text={textWhite}>{message}</p> -->
</div>   
{/if}


<style>
    h3,p{
        background:blue;
    }
    div{
        position:fixed;
        width: 100%;
        top: 0;
        left: 0;
        height: 100%;
        background:rgba(0,0,0,.6);
        display: none;
    }
    p{
       
        padding: 3rem;
    }
    .text{
        color:#fff;
    }
    .show{
        display: block;
    }
</style>