<script>
  import ButtonNav from "../Buttons/ButtonNav.svelte";
  import Nav from "../General/Nav.svelte";
  import Diary from "../Windows/Diary.svelte";
</script>
<style>
  @media screen and (min-width: 900px){
    .nav{
      width: 25%;
      min-width: 300px;
      height: 100vh;
      position: sticky;
      top: 0;
      left: 0;
      display: flex;
    }
  }
</style>

<div class="nav">
  <Nav/>
  <Diary/>
</div>
<ButtonNav/>
