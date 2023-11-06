import Home from './Home.svelte';
import About from './routes/About.svelte';
import Contact from './Contact.svelte';

export const routes = {
  '/': Home,
  '/about': About,
  '/contact': Contact,
};