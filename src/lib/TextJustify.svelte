<script lang="ts">
  interface Props {
    children?: import('svelte').Snippet;
  }

  let { children }: Props = $props();
</script>

<p class="text-justify pb-4">
  {@render children?.()}
</p>
