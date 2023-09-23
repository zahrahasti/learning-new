<script>
    import { createEventDispatcher } from "svelte";
    const dispach=createEventDispatcher()
    let like=0;
    let hanleClickButtonFooter=function(){
        like++;
        dispach("messege",like);
    }
</script>

<div>
    <p>I am footer</p>
    <button on:click={hanleClickButtonFooter}>Like {like}</button>
</div>


<style>
    div{
    
    background:greenyellow;
    }

</style>
