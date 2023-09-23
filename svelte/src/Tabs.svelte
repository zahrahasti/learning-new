<script>
    import { createEventDispatcher } from "svelte";
 export let items;
 export let activeItem;
 const dispatch=createEventDispatcher();
 const showMessage=(item)=>{
    dispatch("message",{
       item
    })
 }
</script>
  
<p>//we say if items and active items are the same then add active class to li tag
  <br>
</p>
<ul>
    {#each items as item}
         <li style="background:{item.color}" on:click={()=>showMessage(item)}>
             <p>name:{item.name}</p>
             <p>name:{item.id}</p>
        </li>
    {/each}
</ul>

<style>
    *{
        color:#fff !important;
    }
    ul{
        border:2px solid red;
        padding: 0.5rem;
         width: max-content;
    }
    li{
        color:#fff;
        padding: 0.3rem 1rem;
    }
    .active{
        background:#f0f;
    }
</style>