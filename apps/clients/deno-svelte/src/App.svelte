<script lang="ts">
  // @ts-ignore
  import svelteLogo from './assets/svelte.svg'
  import Counter from './lib/Counter.svelte'
  import type { Product } from '../../../../libs/shared/types/mod'

  const product: Product = {
    name: 'Playstation',
    price: 899,
    quantity: 20
  }
</script>

<main>
  <img src="/vite-deno.svg" alt="Vite with Deno" />
  <div>
    <a href="https://vitejs.dev" target="_blank" rel="noreferrer"> 
      <img src="/vite.svg" class="logo" alt="Vite Logo" />
    </a>
    <a href="https://svelte.dev" target="_blank" rel="noreferrer"> 
      <img src={svelteLogo} class="logo svelte" alt="Svelte Logo" />
    </a>
  </div>
  <h1>Vite + Svelte</h1>
  <div>
    <h3>Hi Sean hello</h3>
    <h4>{JSON.stringify(product)}</h4>
  </div>
  <div class="card">
    <Counter />
  </div>

  <p>
    Check out <a href="https://github.com/sveltejs/kit#readme" target="_blank" rel="noreferrer">SvelteKit</a>, the official Svelte app framework powered by Vite!
  </p>

  <p class="read-the-docs">
    Click on the Vite and Svelte logos to learn more
  </p>
</main>

<style>
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.svelte:hover {
    filter: drop-shadow(0 0 2em #ff3e00aa);
  }
  .read-the-docs {
    color: #888;
  }
</style>