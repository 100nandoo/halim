<script lang="ts">
  import Navbar from "$lib/Navbar.svelte";
  import "../app.css";
  interface Props {
    children?: import('svelte').Snippet;
  }

  let { children }: Props = $props();
</script>

<header>
  <Navbar />
</header>

<main>{@render children?.()}</main>
