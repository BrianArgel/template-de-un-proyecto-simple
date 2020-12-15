<script>
  import {onMount} from 'svelte';
  import {fly} from 'svelte/transition';
  let show = false;
  onMount(() => {
    show = true;
  });

  export let distance;
</script>

<style>
  .fly{
    width: 100%;
    height: 100%;
    position: relative;
  }
</style>

{#if show}
  <div class="fly" in:fly="{{x: distance, duration: 500}}">
    <slot></slot>
  </div>
{/if}
