<script>
	 import Model from "./Model.svelte";
	 
	 let count=0;
	 let nums=[]
	 $:adding=nums.reduce((cur,num)=>cur+num,0)
	 const addCount=()=>{
	   count++;
	//    nums.push(count)
       nums=[...nums,nums.length+1]
	 }

	 //each
	 let colors=[
		{color:"red",id:1},
		{color:"yellow",id:2}
	 ]
	 const deleteBox=(id)=>{
		colors=colors.filter(color=>color.id!==id)
	 }

	 //await in svelte {#await}{/await}
   async function fetchData(){
	try{
		const res=await fetch("http://127.0.0.1:5500/src/colors.json");
        const data=await res.json();
		console.log(data);
		return data;
	}catch(err){
        console.log("Error");
	}
   }
   fetchData()
  //fetch await	
 let promise=fetchData();
 const handleData=function(){
	promise=fetchData()
 }
 let firstName,lastName;
 let cooking=false;
 let running=false;
 let showModel=false;
 const submitForm=function(){
    console.log(firstName,lastName);
	console.log(cooking,running);
	console.log(interested);
 }
 const toggleModel=function(){
	showModel=!showModel;
 }
 let interested=[]
</script>

 <div class="add-number">   
	 <!-- showing if else block using join methods -->
	 <p> {nums.join(' + ')}={adding}</p>
	 <button on:click={addCount}>nums</button>
 </div>
 <div class="each">
	 {#each colors as color (color.id)}
	    <div class="each-box" style="background:{color.color}">{color.id}
		 <button on:click={()=>deleteBox(color.id)}>delete</button>
		</div>
	 {/each}
	 <!-- await -->
	 <button on:click={handleData}>fetch data</button>
	 {#await promise}
		<p>waiting ...</p>
	 {:then number} 
		{#each number as color}
			 <p style="{color.color}">{color.id}</p>
		{/each}
	 {/await}
 </div>
 <!-- submiting the form -->
 <button on:click={toggleModel}>show model</button>
 <Model {showModel} on:click={toggleModel}>
	<form on:submit|preventDefault={()=>{
		submitForm();
		toggleModel()
		
		}}>
		<input required type="text" bind:value={firstName}>
		<input required type="text" bind:value={lastName}>
		<button type="submit">submit</button>
		<label>cooking</label>
		<input type="checkbox" bind:group={interested} value="cooking"  >
		<label>running</label>
		<input type="checkbox" bind:group={interested} value="running"  >
	</form>
 </Model>

<style>
  div{
	border:2px solid #000;
	padding: 1rem;
  }
  .each-box{
	 height: 5rem;
	 width:max-content;
  }
</style>