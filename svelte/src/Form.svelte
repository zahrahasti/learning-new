 <script>
     import Button from "./Button.svelte";
     import { createEventDispatcher } from "svelte";
     let fields={question:"",answerA:"",answerB:""};
     let valid=false;
     let errors={question:"",answerA:"",answerB:""}
     const dispatch=createEventDispatcher();
    //  const dispatch=createEventDispatcher()
     const addData=()=>{
      valid=true;
      if(fields.question.trim().length<5){
        valid=false;
         errors.question="Question can`t be at least 5 charecter"
      }else {
        errors.question=""
      }
      if(fields.answerA.trim().length<1){
        console.log("a is emprty");
        valid=false;
        errors.answerA="Answer A is empty"
      }else {
        errors.answerA=""
      }  
      if(fields.answerB.trim().length<1){
        valid=false;
        errors.answerB="Answer B is empty"
      }else {
        errors.answerB=""
      }
      if(valid){
        console.log(fields);
        dispatch("add",fields)
        
      }
    }
 </script>


<form on:submit|preventDefault={addData}>
    <label>Question</label>
    <input type="text" placeholder="question..." bind:value={fields.question}>
    <p>{errors.question}</p>
    <label>Answer A</label>
    <input type="text" placeholder="answer A..." bind:value={fields.answerA}>
    <p>{errors.answerA}</p>
    <label>Answer B</label>
    <input type="text" placeholder="answer B..." bind:value={fields.answerB}>
    <p>{errors.answerB}</p>

    <Button type="red">
        add Form
    </Button>
</form>

<style>
   form p{
        color:blue ;
    }
    label{
        color:#fff;
    }
</style>