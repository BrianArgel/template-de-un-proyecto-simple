<script>
  import { onMount, getContext } from 'svelte';
  import { goto } from '@sapper/app';
  const user = getContext("user")

  onMount(() => goto(`/user/${user.username}/${user.code}`));
</script>

si te soy sincero, es lo ultimo que aprendi y se lo basico aun, algo.