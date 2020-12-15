<script context="module">
  export async function preload(page, session) {
    const { token } = session;

    if (token) {
      return this.redirect(302, "/");
    }
  }
</script>

<script>
	import FormSignin from '../../components/Forms/FormSignin.svelte';
</script>

<style>
  .signin{
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

<div class="signin">
  <FormSignin distance={-100} />
</div>
