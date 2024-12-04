<script lang="ts">
  import LinkButton from "$lib/LinkButton.svelte";
  import { text } from "@sveltejs/kit";
</script>

<div class="max-w-4xl mx-auto p-4">
  <div class="flex flex-wrap align-middle">
    <div class="max-w-lg">
      <h1 class="text-4xl font-bold">Hello,<br /> I'm Fernando</h1>
      <p class="pt-8 md:py-8">
        I’m an Android Developer with six years of experience based in sunny Singapore. Android
        tinkerer, six-string strummer & movie buff.
      </p>
    </div>

    <div class="avatar mx-auto my-8 md:my-0">
      <div class="w-48 h-48 mask mask-squircle">
        <img src="profile.webp" alt="profile_image" />
      </div>
    </div>
  </div>

  <div class="flex gap-4 justify-center md:justify-start">
    <LinkButton link="https://github.com/100nandoo" text="Github" type="btn-accent" />
    <LinkButton
      link="https://www.linkedin.com/in/fernando-fransisco-halim-a8405b131/"
      text="Linkedin"
    />
    <LinkButton link="https://twitter.com/100nandoo" text="Twitter" type="btn-secondary" />
  </div>
</div>