<!-- <script context="module">
  export async function preload(session){
    const { token } = session;

    const urlDefaul = "http://localhost:4000/api/images/users/user-default.png";

    const response = await this.fetch(`http://localhost:4000/api/users/id`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "x-access-token": token
      },
    });
    const res = await response.json();
    console.log(res);
    if(!res.url === urlDefaul){
      return this.redirect(302, "/");
    }
  }
</script> -->

<!-- todo esto lo voy a subir en un repositorio para que lo puedas clonar y puedas ver algunas cositas. -->
<script>
  import FormSignupImage from "../../../components/Forms/FormSignupImage.svelte";
  import { onMount } from 'svelte';
  import { goto, stores } from '@sapper/app';
  const { session } = stores();

  onMount(async () =>{
    const urlDefaul = "http://localhost:4000/api/images/users/user-default.png";
    
    const response = await fetch(`http://localhost:4000/api/users/id`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "x-access-token": $session.token
      },
    });
    const res = await response.json();
    
    if(res.url === urlDefaul){
      console.log(res.url)
    }else{
      await goto("/").then(()=> {
        location.reload();
      });
    }
  });
</script>

<style>
  .signup-img{
    width: 100%;
    height: 100vh;
    display: grid;
    place-items: center;
    transition: .2s;
  }
</style>

<div class="signup-img">
  <FormSignupImage distance={100}/>
</div>