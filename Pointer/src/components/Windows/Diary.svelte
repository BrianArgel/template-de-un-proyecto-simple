<script>
  import Logo from "../Utils/Logo.svelte";
</script>

<style>
  .window{
    transition: .3s;
  }
  .logo{
    position: absolute;
    top: -500px;
    transition: .3s;
  }
  @media screen and (min-width: 1025px){
    .window{
      width: calc(100% - 4.5rem);;
      height: 30rem;
      position: absolute;
      right: 0;
      background: #fff;
      border-radius: 1rem;
      box-shadow: var(--box-shadow);
      grid-column-start: 2;
      grid-column-end: 3;
      justify-self: center;
      align-self: center;
      display: flex;
      justify-content: center;
      transition: .3s;
    }
    .logo{
      top: 0;
      margin: 1.5rem 0 .75rem 0;
      transition: .3s;
    }
  }
</style>

<div class="window">
  <div class="logo">
    <Logo/>
  </div>
</div>