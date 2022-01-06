<script>
export default {
  head({$seoMeta}){
    return {
      title: 'About Me',
      meta: $seoMeta({
        title: 'About Me',
        description: 'Hello there, check my profile here at my own website. 😎',
        url: 'https://nizarbaihaqi.com/about'
      }, false)
    }
  }
}
</script>

<template>
  <div>
    <div class="container">
      <Me />
    </div>
    <div class="container block md:flex">
      <div class="card md:w-5/12">
        <h3 class="text-center">Tech stack</h3>
        <div class="flex justify-center px-1 flex-wrap">
          <a
            target="_blank"
            href="https://nuxtjs.org/"
            class="flex flex-col items-center logo-link"
          >
            <img
              class="logo"
              src="https://upload.wikimedia.org/wikipedia/commons/a/ae/Nuxt_logo.svg"
              alt="Logo Nuxtjs"
            />
            <p>Nuxtjs</p>
          </a>
          <a
            target="_blank"
            href="https://tailwindcss.com/"
            class="flex flex-col items-center logo-link"
          >
            <img
              class="logo"
              src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg"
              alt="Logo Tailwindcss"
            />
            <p>Tailwindcss</p>
          </a>
        </div>
      </div>
      <div class="card md:w-7/12">
        <h3 class="text-center mb-4">Basic skill</h3>
        <div class="flex justify-center flex-wrap">
          <a
            target="_blank"
            href="https://www.w3schools.com/html/"
            class="flex flex-col items-center logo-link"
          >
            <img
              class="logo"
              src="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg"
              alt="Logo HTML"
            />
            <p>HTML</p>
          </a>
          <a
            target="_blank"
            href="https://www.w3schools.com/css/"
            class="flex flex-col items-center logo-link"
          >
            <img
              class="logo"
              src="https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg"
              alt="Logo CSS"
            />
            <p>CSS</p>
          </a>
          <a
            target="_blank"
            href="https://javascript.info/"
            class="flex flex-col items-center logo-link"
          >
            <img
              class="logo"
              src="https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg"
              alt="Logo Javascript"
            />
            <p>Javascript</p>
          </a>
          <a
            target="_blank"
            href="https://www.php.net/"
            class="flex flex-col items-center logo-link"
          >
            <img
              class="logo"
              src="https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg"
              alt="Logo Javascript"
            />
            <p>PHP</p>
          </a>
        </div>
      </div>
    </div>
    <div class="container block md:flex">
      <div class="card md:w-1/2">
        <h3 class="mb-4 text-center">Side project</h3>
        <div class="flex justify-center">
          <a
            target="_blank"
            href="https://v3.vuejs.org"
            class="flex flex-col items-center logo-link"
          >
            <img
              class="logo"
              src="https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg"
              alt="Logo Svelte"
            />
            <p>Vue 3</p>
          </a>
          <a
            target="_blank"
            href="https://svelte.dev/"
            class="flex flex-col items-center logo-link"
          >
            <img
              class="logo"
              src="https://upload.wikimedia.org/wikipedia/commons/1/1b/Svelte_Logo.svg"
              alt="Logo Svelte"
            />
            <p>Svelte</p>
          </a>
          <a
            target="_blank"
            href="https://laravel.com"
            class="flex flex-col items-center logo-link"
          >
            <img
              class="logo"
              src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Laravel.svg"
              alt="Logo Svelte"
            />
            <p>Laravel</p>
          </a>
        </div>
      </div>
      <Contacts class="md:w-1/2" />
    </div>
  </div>
</template>