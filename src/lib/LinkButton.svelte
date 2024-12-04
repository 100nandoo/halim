<script lang="ts">
  interface Props {
    link: string;
    text: string;
    type?: string;
  }

  let { link, text, type = "btn-primary" }: Props = $props();
  const button_link =
    "btn btn-outline rounded-full transition duration-500 ease-in-out transform hover:scale-110 hover:-translate-y-1";
</script>

<a href={link} target="_blank">
  <button class={`${button_link} ${type}`}>{text}</button>
</a>
