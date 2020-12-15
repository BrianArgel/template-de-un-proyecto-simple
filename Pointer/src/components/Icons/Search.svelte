<script>
  import { buttonNav } from "../Buttons/button";
</script>

<style>
  a{
    width: 100%;
    height: 100%;
    text-decoration: none;
    display: block;
    cursor: pointer;
  }
</style>

<div class="icon">
  <a href="/search" on:click="{buttonNav.toggle}">
    <div class="icon-search">
    </div>
  </a>
</div>