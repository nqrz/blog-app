<template>
  <div class="flex justify-center flex-wrap gap-4">
    <div v-for="logo in category" :key="logo">
      <div class="flex flex-col items-center" v-if="logo == 'nuxtjs'">
        <img
          class="logo-mini"
          src="https://upload.wikimedia.org/wikipedia/commons/a/ae/Nuxt_logo.svg"
          alt="Logo Nuxtjs"
        />
        <p>Nuxtjs</p>
      </div>
      <div class="flex flex-col items-center" v-if="logo == 'tailwindcss'">
        <img
          class="logo-mini"
          src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg"
          alt="Logo Tailwindcss"
        />
        <p>Tailwindcss</p>
      </div>
      <div class="flex flex-col items-center" v-if="logo == 'html'">
        <img
          class="logo-mini"
          src="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg"
          alt="Logo HTML"
        />
        <p>HTML</p>
      </div>
      <div class="flex flex-col items-center" v-if="logo == 'css'">
        <img
          class="logo-mini"
          src="https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg"
          alt="Logo CSS"
        />
        <p>CSS</p>
      </div>
      <div class="flex flex-col items-center" v-if="logo == 'javascript'">
        <img
          class="logo-mini"
          src="https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg"
          alt="Logo Javascript"
        />
        <p>Javascript</p>
      </div>
      <div class="flex flex-col items-center" v-if="logo == 'svelte'">
        <img
          class="logo-mini"
          src="https://upload.wikimedia.org/wikipedia/commons/1/1b/Svelte_Logo.svg"
          alt="Logo Svelte"
        />
        <p>Svelte</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    category: Array
  }
}
</script>