<!-- src/components/NavBar.svelte -->
<script>
  import { Link } from 'svelte-routing';
</script>

<nav>
  <ul>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/about">About</Link></li>
    <li><Link to="/contact">Contact</Link></li>
  </ul>
</nav>




<style>
  nav {
    background-color: #333;
    color: white;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    display: inline;
    margin: 0 10px;
  }

  a {
    color: white;
    text-decoration: none;
  }
</style>