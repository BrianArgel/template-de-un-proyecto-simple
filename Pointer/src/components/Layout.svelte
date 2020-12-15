<script>
	import { setContext } from 'svelte';
  export let user;
  setContext("user", user);
</script>
<style>
  :global(*){
    box-sizing: border-box;
  }
  :global(:root){
    --color-white:  #f0f2f5;
    --color-black: #1a1a1a;

    --size-1: .75rem;
    --size-15: 1.125rem; 
    --size-2: 1.5rem;
    --size-25: 1.875rem;
    --size-3: 2.25rem;

    --box-shadow: -1px 1px 3px rgba(26,26,26,.15);
  }
  :global(.icon){
    width: 3rem;
    height: 3rem;
    display: grid;
    place-items: center;
  }

  .layout{
    width: 100%;
    min-height: 100vh;
    background-color: var(--color-white);
    display: flex;
  }
</style>


<svelte:head>
  <link href="https://fonts.googleapis.com/css2?family=Kameron:wght@400;700&family=Sansita:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet">
</svelte:head>

<div class="layout">
  <slot></slot>
</div>
