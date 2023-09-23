<script>
    import PollDetail from "./PollDetail.svelte";
  export let polls
</script>

<div class="card">
	{#each polls as poll }
      <PollDetail {poll} />
		<!-- <p>Question:{poll.question}</p>
		<p>Answer A:{poll.answerA}</p>
		<p>Answer B:{poll.answerB}</p> -->
	{/each}
 </div>