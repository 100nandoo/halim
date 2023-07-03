<script lang="ts">
  export var link: string;
  export var text: string;
  export var type: string = "btn-primary";
  const button_link =
    "btn btn-outline rounded-full transition duration-500 ease-in-out transform hover:scale-110 hover:-translate-y-1";
</script>

<a href={link} target="_blank">
  <button class={`${button_link} ${type}`}>{text}</button>
</a>
