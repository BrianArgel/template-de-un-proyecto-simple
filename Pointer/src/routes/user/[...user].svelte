<script context="module">
	export async function preload(page, session, error ) {
    let username = page.params.user[0];
    let code = page.params.user[1];
    const { token } = session;
    
    if (!token) {
      return this.redirect(302, "/");
    }
    
		const response = await this.fetch(`http://localhost:4000/api/users/id/${username}/${code}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "x-access-token": token
      },
    });
    const userData = await response.json();
    if (userData.message) {
      this.error(404, 'Not found');
    } else {
      return { user : userData };
    }
	}
</script>

<script>
  import ButtonNav from "../../components/Buttons/ButtonNav.svelte";
  import Nav from "../../components/General/Nav.svelte";
  export let user;
  let username = user.username.slice(1, user.username.length)
</script>


<style>
  img{
    width: 200px;
    height: 200px;
    object-fit: cover;
    overflow: hidden;
    
  }
</style>

<svelte:head>
  <title>{username} | Pointeri</title>
</svelte:head>
<span>{user.url}</span>
<img src="{user.url}" alt="user">

<Nav/>
<ButtonNav/>