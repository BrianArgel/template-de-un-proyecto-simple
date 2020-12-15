<script>
	import { windowWidth } from './../layout.js';
import { buttonNav } from "./button";

import Cross from "../Icons/Cross.svelte";

  
</script>
<!-- ese codigo ya lo tenia, luego te la envio tambien -->
<style>
  .btn-nav{
    width: 3rem;
    height: 3rem;
    background-color: #fff;
    position: fixed;
    right: .75rem;
    bottom: 1.5rem;
    border: 1px solid rgba(26, 26, 26, .15);
    border-radius: 50%;
    box-shadow: var(--box-shadow);
    user-select: none;
    cursor: pointer;
  }
</style>

{#if $windowWidth <= 900} 
<div class="btn-nav" on:click="{buttonNav.toggle}">
  <Cross/>
</div>
{/if}