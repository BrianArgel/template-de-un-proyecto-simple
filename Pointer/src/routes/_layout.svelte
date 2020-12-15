<script context="module">
	export async function preload(page, session) {
    const { token } = session;
    
    if (!token) {
      return
    }

		const response = await this.fetch(`http://localhost:4000/api/users/id`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "x-access-token": token
      },
    });
    const userData = await response.json();
		return { user : userData };
	}


</script>
<script>
  import Layout from "../components/Layout.svelte";
  import {windowWidth} from "../components/layout";
  export let user;
</script>

<svelte:window bind:innerWidth={$windowWidth} />

<Layout user={user}>
  <slot></slot>
</Layout>

