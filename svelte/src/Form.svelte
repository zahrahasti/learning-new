<!-- <script>
    import { createEventDispatcher } from "svelte";
    const dispach=createEventDispatcher();

let id,password;
const handleUserDetails=function(){
    const user={
        id,
        password
    }
    dispach("addUser",user)
}
</script>


<form on:submit|preventDefault={handleUserDetails}>

    <input type="text" bind:value={id}>
    <input type="text" bind:value={password}>
    <button type="submit">click</button>
</form>

<style>
    form{
        border:5px solid red;
    }
    *{
        color:#fff;
    }
    input{
        background:pink;
        width:6rem;
    }
</style> -->