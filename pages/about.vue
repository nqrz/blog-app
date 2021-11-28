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
    <Hero>
      <div>
        <p class="text-9xl mb-8">🐱‍💻</p>
        <h1 class="font-bold mb-4">About me</h1>
      </div>
    </Hero>
    <Container>
      <Me />
    </Container>
    <Container>
      <Card class="w-screen lg:w-5/12 flex justify-center">
        <h5 class="text-center mb-4">Tech stack</h5>
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
            href="https://windicss.org/"
            class="flex flex-col items-center logo-link"
          >
            <img
              class="logo"
              src="https://windicss.org/assets/logo.svg"
              alt="Logo Windicss"
            />
            <p>Windicss</p>
          </a>
        </div>
      </Card>
      <Card class="mt-6 lg:mt-3 w-screen lg:w-7/12 lg:ml-6 flex justify-center">
        <h5 class="text-center mb-4">Basic skill</h5>
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
        </div>
      </Card>
    </Container>
    <Container>
      <Card class="w-screen lg:w-1/2 flex justify-center">
        <h5 class="mb-4 text-center">Side project</h5>
        <div class="flex justify-center">
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
        </div>
      </Card>
      <Contacts class="mt-6 lg:mt-3 w-screen lg:w-1/2 lg:ml-6" />
    </Container>
  </div>
</template>