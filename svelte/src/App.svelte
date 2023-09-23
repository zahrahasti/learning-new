<script>
	import Form from "./Form.svelte";
	import Polls from "./Polls.svelte";
 	let polls=[]
    let items=[{
	 name:"zahra",
	 id:"zahrahasti121212",
	 password:11111,
     color:"pink"
},
{
	 name:"hasti",
	 id:"butterfly13333",
	 password:22222,
     color:"#0000ff"
},
] 

let  activeItem=items[0];
import Tabs from "./Tabs.svelte";

const changeBg=(e)=>{
	console.log(e.detail);
	const {item}=e.detail;
	activeItem=item
	console.log(item);
}
const addCard=(e)=>{
	let poll=e.detail;
	polls=[...polls,poll];
}
</script>

<Tabs {items} {activeItem} on:message={changeBg}/>
<div class="user">
	<h3>{activeItem.name}</h3>
	<p>{activeItem.password}</p>
	<p>{activeItem.id}</p>
</div>


<Form on:add={addCard} />
  

<Polls {polls} />

<style>
.blue{
	background:#0303ff(0, 0, 255, 0.178);
}

.user{
    background:goldenrod;
   width: 12rem;
}

</style>