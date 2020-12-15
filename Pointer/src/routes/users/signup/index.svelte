<script context="module">
  // esto hace que si hay un token lo lleve al index
  export async function preload(page, session) {
    const { token } = session;

    if (token) {
      return this.redirect(302, "/");
    }
  }
</script>

<script>
	import FormSignup from '../../../components/Forms/FormSignup.svelte';
</script>

<style>
  .signup{
    width: 100%;
    height: 100vh;
    display: grid;
    place-items: center;
    transition: .2s;
  }
</style>

<svelte:head>
  <title>SignIn | Pointeri</title>
</svelte:head>

<div class="signup">
  <FormSignup distance={100} />
</div>