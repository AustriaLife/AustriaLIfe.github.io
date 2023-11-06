<script>
	import { Router, Route } from 'svelte-routing';
 	import { routes } from './routes/routes.js';

	export let name;
</script>

<main>
	<h1>Hello {name}!</h1>
	<p>ft7zugih</p>
	<Router>
    	{#each Object.keys(routes) as route}
      		<Route {routes[route]} path={route} />
    	{/each}
  </Router>
	<NavBar />
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
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