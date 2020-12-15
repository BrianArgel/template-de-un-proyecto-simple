<script>
  import Fly from "../Transitions/Fly.svelte";
  import Logo from "../Utils/Logo.svelte";
  import { goto, stores } from "@sapper/app";
  import {getContext} from "svelte";
  const { session } = stores();

  let files = [];
  
  let error;

	$: if(files && files[0]){
		let reader = new FileReader();
			reader.onload = function(e) {
				url = e.target.result
		}
		reader.readAsDataURL(files[0]);
	}
  const SignUpImg = async () => {
    const formData = new FormData();
    formData.append("image", files[0]);
    const response = await fetch(`http://localhost:4000/api/auth/signup/img`, {
      method: "POST",
      headers: {
        "x-access-token": $session.token
      },
      body: formData
    });

    const parsed = await response.json();

    if (parsed.error) {
      error = parsed.error;
    } else {
      goto("/user").then(()=> {
        location.reload();
      });
    }
  };

  export let distance;
  const user = getContext("user")
  let username = user.username.slice(1, user.username.length)
  let url = user.url;
</script>

<style>
  .signupimg-box{
    width: 85%;
    max-width: 360px;
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
  .form-input{
    width: 100%;
    margin-bottom: 1.25rem;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  input[type="file"]{
    width: 0.1px;
    height: 0.1px;
    opacity: 0;
    overflow: hidden;
    position: absolute;
    z-index: -1;
  }
  label[for="img-user"]{
    width: 125px;
    height: 125px;
    border-radius: 50%;
    background-color: rgba(26, 26, 26, .15);
    border: 2px solid rgba(26, 26, 26, .5);
    background-size: 100%;
    background-position: center;
    object-fit: cover;
    display: inline-block;
    transition: .3s;
  }
  label[for="img-user"]:hover{
    border: 2px solid rgba(26, 26, 26, .9);
    filter: grayscale(50%);
    cursor: pointer;
    transition: .3s;
  }
  input[type="submit"]{
    font-family: Sansita, sans-serif;
    font-size: 14px;
    width: 30%;
    height: 2rem;
    border-radius: 1rem;
    border: none;
    background-color: var(--color-black);
    color: #fff;
    transition: .25s;
  }
  input[type="submit"]:hover{
    background-color:rgba(26, 26, 26, .95);
    transition: .25s;
    cursor: pointer;
  }
  .user-username{
    display: flex;
    justify-content: center;
    margin: .75rem 0 1rem 0;
  }
  .user-username span{
    font-family: Sansita, sans-serif;
    font-size: 18px;
    color: var(--color-black);
  }
</style>

<div class="signupimg-box">
  <Fly distance="{distance}">
    <div class="signin-form">
      <div class="form-logo">
        <Logo/>
      </div>
      <div class="form-text">
        <p>Thousands of stories await you at Pointeri</p>
      </div>
      <div class="_line"></div>
      <div class="form">
        <form on:submit|preventDefault="{SignUpImg}" method="post" enctype="multipart/form-data">
          <div class="form-input">
            <!-- <input type="file" required id="username" bind:value="{username}"> -->
            <input type="file" id="img-user" name="image" bind:files >
            <label for="img-user" style="background-image: url({url});"></label>
          </div>
          <div class="user-username">
            <span>{username}</span>
          </div>
          <div class="form-input">
            <input type="submit" value="Upload">
          </div>
        </form>
      </div>
    </div>
  </Fly>
</div>