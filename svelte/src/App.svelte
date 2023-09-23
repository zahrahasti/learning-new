<script>
	import Model from "./Model.svelte";
	import Form from "./Form.svelte";
	import Footer from "./Footer.svelte";
     let name="zahra";
	 let lastName="NM";
	 let color="red"
	export let item;
	//reactive value
	$: fullNmae=`${name} ${lastName}`
	$ : {
		console.log(fullNmae);
		console.log(color)};
	const changeName=function(){
		name="shayan"
	}
	const changeDynamicName=function(e){
		 name=e.target.value
	}
    let songs=[
		{name:"Lili",duration:"4:5",id:1},
		{name:"Kemal",duration:"2:15",id:2},
		{name:"Lola",duration:"3:25",id:3}
	]
	let deleteSong=(id)=>{
		songs=songs.filter((song)=>song.id!=id);
	}
	//loops in svelte
	let time=2023;

	//toggle the mode footer
	let showFooter=false;
	const showFooterModel=function(){
		showFooter=!showFooter;
	}
	let nameUser;
	let lastNameUser;
	let age;
	const submitForm=function(){
		console.log(nameUser,lastNameUser);
	}

	let users=[
		{
			id:"zahra124",
			password:111
		},
		{
			id:"shayan",
			password:222
		}
	]
	const addUser=function(e){
		const user=e.detail;
		users=[...users,user]
	}
    let detailNumLike;
	const handleAlertLike=function(e){
		detailNumLike=e.detail;
		console.log(e.detail);
		console.log("Like is happend");
	}

	//import mark
	let value="Hello,How are you? -list -home -work"
</script>
<header>
	{#if time>2022}
		<p>time  is bigger than 2022</p>
		{:else} <p>time  is smaller than 2023</p>
	{/if}
	 <nav>
		 <ul>
			 {#each songs as song (song.id)}
				<li>
					<div class="card">
						<h3>{song.name}</h3>
						<p>{song.duration}</p>
						<button on:click={()=>deleteSong(song.id)}>delete</button>
					</div>
				</li>
				{:else} <p>No songs to show</p>
			 {/each}
			
		 </ul>
	 </nav>
</header>
<main>
	<h1>Hello {fullNmae}!</h1>
	<p style="color:{color}">Visit the</p>
	<button on:click={changeName}>change Name</button>
	<!-- <input type="text" on:input={changeDynamicName} value={name}> -->
	<!--todo bind:value do the both things in high -->
	<input type="text" bind:value={name}>
	<input type="text" bind:value={lastName}>
	<input type="text" bind:value={color}>
</main>

<!-- create the footer for showing in the page -->
<button on:click={showFooterModel}>show footer</button>
<Model message="@copyright by: zahra" {showFooter} on:click={showFooterModel}>
	<!--review using slot for these piece of code  -->
	<form on:submit|preventDefault={submitForm,showFooterModel}>
        <input required type="text" placeholder="name" bind:value={nameUser}>
        <input required type="text" placeholder="last name" bind:value={lastNameUser}>
        <button>submit</button>
    </form>
    <div slot="title">
       <p>Slot in svelte</p>
	</div>	
	 <!-- using Form component -->
</Model>

<!-- showing user in the page -->
{#each users as user}
	<div>
		<h5>{user.id}</h5> :
		 <p>{user.password}</p>
	</div>
{/each}
<!-- <Form on:addUser={addUser} /> -->
<!-- <Footer on:messege={handleAlertLike} /> -->

<p>{detailNumLike}</p>
<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}
	ul , li{
		list-style:none;
	}
	 form{
		background:orange;
		padding: 4rem;
	 }
    .card{
		display: flex;
		width: 10rem;
		align-items: center;
		justify-content: space-between;
		gap: 3rem;
		padding:.2rem;
		background:pink;
		margin: 1rem;
		border-radius:5px;
		 
	}
	.card p{
		font-size:12px;
		color:#777;
	}
	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>