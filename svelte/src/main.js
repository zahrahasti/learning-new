import App from './App.svelte';

const app = new App({
	// target: document.body,
	target:document.body, // all files that are inside the body tag
	props: {
		name: 'world', // the props that contains items
		item:"Home"
	}
});

export default app;