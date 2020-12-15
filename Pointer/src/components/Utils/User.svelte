<script>
  import { stores } from '@sapper/app';
  import UserDefault from "../Icons/UserDefault.svelte";
  import {getContext} from "svelte"

  const { session } = stores();
  const user = getContext("user")

  import { buttonNav } from "../Buttons/button";
  
  $: link = $session.token ? `/user/${user.username}/${user.code}` : "/users/signin";
</script>

<style>
  .icon-user{
    width: 2.25rem;
    height: 2.25rem;
    display: grid;
    place-items: center;
    border: 2px solid var(--color-black);
    border-radius: 50%;
  }
  img{
    width: 1.75rem;
    height: 1.75rem;
    object-fit: cover;
    clip-path: circle(50% at 50% 50%);
  }
</style>

<div class="icon">
  <a href="{link}" on:click="{buttonNav.toggle}">
    {#if $session.token}
      <div class="icon-user">
        <img src="{user.url}" alt="img User">
      </div>
      {:else}
      <UserDefault/>
    {/if}
  </a>
</div>