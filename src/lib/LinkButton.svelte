<script lang="ts">
  export var link: string
  export var text: string
  export var type: string = 'btn-primary'
  const button_link =
    'btn rounded-full transition duration-500 ease-in-out transform hover:scale-110 hover:-translate-y-1'
</script>

<a href={link}>
  <button class={`${button_link} ${type}`}>{text}</button>
</a>
