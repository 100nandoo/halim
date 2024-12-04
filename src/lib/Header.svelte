<script lang="ts">
  interface Props {
    mt?: boolean;
    children?: import('svelte').Snippet;
  }

  let { mt = true, children }: Props = $props();
</script>

<h1
  class="text-2xl font-bold mb-2
{mt ? 'mt-4' : ''}"
>
  {@render children?.()}
</h1>
