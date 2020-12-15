<script>
	import BarIcons from './../Utils/BarIcons.svelte';
	import { windowWidth } from './../layout.js';
  import { crossfade} from "svelte/transition";
  import { buttonNav } from "../Buttons/button";

const [send, receive] = crossfade({
  duration: 400,
  fallback(node, params) {
    return {
      duration: 0
    };
  }
});
  
</script>

<style>
  nav{
    width: 3rem;
    min-height: 3rem;
    height: auto;
    position: fixed;
    right: .75rem;
    bottom: 1.5rem;
    background-color: #fff;
    border: 1px solid rgba(26, 26, 26, .15);
    border-radius: 1.5rem;
    display: flex;
    flex-direction: column;
    transition: .4s;
  }
  nav.active{
    padding: 1.5rem 0;
    bottom: 5rem;
    box-shadow: var(--box-shadow);
    transition: .4s;
  }
  @media screen and (min-width: 900px){
    nav, nav.active{
      position: absolute;
      right: unset;
      left: .75rem;
      top: unset;
      bottom: unset;
      padding: 1.5rem 0;
      box-shadow: var(--box-shadow);
      transition: .4s;
      align-self: center;
    }
  }
  
</style>

{#if $buttonNav}
  <nav class:active={$buttonNav} in:receive={{key: "1"}} out:send={{key: "1"}}>
    <div class="items" >
      <BarIcons/>
    </div>
  </nav>
  {:else}
    
    <nav class:active={$buttonNav} in:receive={{key: "1"}} out:send={{key: "1"}}>
      <div class="items" >
        {#if $windowWidth >= 1025}
          <BarIcons/>
        {/if}
      </div>
    </nav>
{/if}