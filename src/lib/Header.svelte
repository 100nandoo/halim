<script>
  export let mt = true;
</script>

<h1
  class="text-2xl font-bold mb-2
{mt ? 'mt-4' : ''}"
>
  <slot />
</h1>
