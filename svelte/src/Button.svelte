<script>
  export let type="red";
  export let flat=false
</script>



<button type="submit" class={type} class:flat={flat}>
    <slot></slot>
</button>

<style>
    button{
        padding: 1rem;
        color:#fff;
    }
    .red{
        background:red;
        
    }
    .blue{
        background:blue;
    }
</style>