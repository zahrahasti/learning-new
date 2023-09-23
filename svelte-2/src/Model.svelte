<script>
  export let showModel=false;;
</script>

{#if showModel}
<div class="model" class:showModel={showModel} on:click|self>
    <slot></slot>
</div>
{/if}


<style>
    .model{
        background:rgba(0,0,0,.5);
        position: fixed;
        width: 100%;
        height: 100%;
        display: none;
        top: 0;
        left: 0;
        color:yellow;
    }
    .showModel{
        display: block;
    }
     
</style>