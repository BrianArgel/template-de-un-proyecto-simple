<script>
  import { goto, stores } from "@sapper/app";
  const { session } = stores();

  import Logo from "../Utils/Logo.svelte";
  import Fly from "../Transitions/Fly.svelte";

  let email;
  let password;
  let username;
  let error;

  const SignUp = async () => {
    // este fetch utiliza por medio las rutas de sapper de servidor
    const response = await fetch("/users/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ email, password, username }),
    });

    const parsed = await response.json();
    console.log(parsed)

    if (parsed.error) {
      error = parsed.error;
    } else {
      $session.token = parsed.token;
      await goto("/users/signup/image");
    }
  };
  
  export let distance;
</script>

<style>
  .signin-box{
    width: 85%;
    max-width: 240px;
    max-height: 85vh;
  }
  .signin-form{
    width: 100%;
    margin-bottom: 1rem;
    background-color: #fff;
    border: 1px solid rgba(26, 26, 26, .15);
    border-radius: 16px;
    box-shadow: var(--box-shadow);
    display: flex;
    flex-direction: column;
  }
  .change{
    width: 100%;
    padding: .5rem 1rem;
    background-color: #fff;
    padding: 1.5rem 0;
    border: 1px solid rgba(26, 26, 26, .15);
    border-radius: 16px;
    box-shadow: var(--box-shadow);
    display: flex;
    justify-content: center;
  }
  .change p{
    width: 85%;
    font-size: .9rem;
    font-family: Sansita, sans-serif;
    color:  rgba(26, 26, 26, .9);
  }
  .change span{
    margin-left: .25rem;
  }
  .change a{
    color: rgba(26, 26, 26, .9);
  }
  .form-logo{
    width: 100%;
    display: flex;
    justify-content: center;
    margin: 1.5rem 0 .75rem 0;
    color: var(--color-black);
  }
  .form-text{
    width: 70%;
    font-family: Sansita, sans-serif;
    align-self: center;
    text-align: center;
    margin-bottom: 1rem;
  }
  ._line{
    width: 80%;
    height: 1px;
    border-radius: 1px;
    background-color: rgba(26, 26, 26, .5);
    align-self: center;
    margin-bottom: 1.5rem;
  }
  .form{
    width: 75%;
    align-self: center;
  }
  .form-input{
    width: 100%;
    height: 3rem;
    margin-bottom: 1.25rem;
    position: relative;
    display: flex;
    align-items: center;
  }
  label{
    font-family: Sansita, sans-serif;
    position: absolute;
    margin-left: 1rem;
    font-size: 14px;
    color: rgba(26, 26, 26, .5);
    transition: .25s;
    cursor: text;
  }
  input{
    width: 100%;
    height: 2.25rem;
    padding: 0 1rem;
    font-family: Sansita, sans-serif;
    position: absolute;
    background: transparent;
    border: 1px solid rgba(26, 26, 26, .5);
    border-radius: 1rem;
    transition: .25s;
    font-size: 14px;
  }
  input:focus, 
  input:valid {
    border: 1px solid var(--color-black);
    outline: none;
    transition: .25s;
  }
  input:focus ~ label,
  input:valid ~ label{
    transform: translateY(-28px);
    font-size: 12px;
    color: var(--color-black);
    transition: .25s;
    cursor: default;
  }
  .form-input:last-child{
    display: flex;
    justify-content: center;
    align-items: center;
  }
  input[type="submit"]{
    width: 80%;
    background-color: var(--color-black);
    color: #fff;
    transition: .25s;
  }
  input[type="submit"]:hover{
    background-color:rgba(26, 26, 26, .95);
    transition: .25s;
    cursor: pointer;
  }
</style>
<div class="signin-box">
  <Fly distance={distance}>
    <div class="signin-form">
      <div class="form-logo">
        <Logo/>
      </div>
      <div class="form-text">
        <p>Thousands of stories await you at Pointeri</p>
      </div>
      <div class="_line"></div>
      <div class="form">
        <form on:submit|preventDefault="{SignUp}" method="post">
          <div class="form-input">
            <input type="text" required id="username" bind:value="{username}">
            <label for="username">Username</label>
          </div>
          <div class="form-input">
            <input type="email" required id="email" bind:value="{email}">
            <label for="email">Email</label>
          </div>
          <div class="form-input">
            <input type="password" required id="password" bind:value="{password}">
            <label for="password">Password</label>
          </div>
          <div class="form-input">
            <input type="submit" value="Sign Up">
          </div>
        </form>
      </div>
    </div>
    <div class="change">
      <p>already have an account? <span><a href="/user/signin">Sign In</a></span></p>
    </div>
  </Fly>
</div>