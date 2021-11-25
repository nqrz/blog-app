<template>
  <div>
    <Hero>
      <div>
        <h1 class="font-bold mb-4">About me</h1>
        <a
          target="_blank"
          href="https://learn.g2.com/what-is-lorem-ipsum"
          class="hover:text-white"
        >
          <h6>What is lorem ipsum? 🧐</h6>
        </a>
      </div>
    </Hero>
    <Container>
      <Card>
        <div class="block lg:flex">
          <div class="flex justify-center">
            <img
              src="../assets/ijay.jpg"
              alt="Nizar Baihaqi"
              class="rounded-md img"
            />
          </div>
          <div class="lg:ml-6">
            <h4 class="font-semibold mb-2 text-center lg:text-left">
              Nizar Baihaqi
            </h4>
            <p>
              Hello, I’m Nizar Baihaqi from Indonesia. I am a Web Developer. I
              have experience at building website with Jamstack application.
            </p>
            <div class="mt-14 flex">
              <a
                target="_blank"
                href="https://github.com/nqrz"
                class="flex items-center hover:text-blue-900"
              >
                <i class="fab fa-github ml-4"></i>
                <p class="ml-2">nqrz</p>
              </a>
              <a
                target="_blank"
                href="https://twitter.com/abaihaaqi"
                class="flex items-center hover:text-blue-900"
              >
                <i class="fab fa-twitter ml-4"></i>
                <p class="ml-2">abaihaaqi</p>
              </a>
              <!-- <a
                target="_blank"
                href="https://instagram.com/abaihaaqi"
                class="flex items-center hover:text-blue-900"
              >
                <i class="fab fa-instagram ml-4"></i>
                <p class="ml-2">abaihaaqi</p>
              </a> -->
            </div>
          </div>
        </div>
      </Card>
    </Container>
    <Container>
      <Card class="w-screen lg:w-1/2 flex justify-center">
        <h5 class="text-center mb-4">Tech stack (This web)</h5>
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
      </Card>
      <Card class="mt-6 lg:mt-3 w-screen lg:w-1/2 lg:ml-6 flex justify-center">
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
      <Card class="mt-6 lg:mt-3 w-screen lg:w-1/2 lg:ml-6 flex justify-center">
        <h4 class="text-center mb-4">Contacts</h4>
        <div>
          <a target="_blank" href="mailto:nizarbaihaq@gmail.com">
            <button class="rounded w-full">
              <i class="far fa-envelope"></i> nizarbaihaq@gmail.com
            </button>
          </a>
          <a target="_blank" href="https://www.linkedin.com/in/nizar-baihaqi/">
            <button class="rounded w-full mt-3">
              <i class="fab fa-linkedin"></i> LinkedIn
            </button>
          </a>
          <a href="https://dribbble.com/ijaybaihaqi">
            <button class="rounded w-full mt-3">
              <i class="fab fa-dribbble"></i> Dribbble
            </button>
          </a>
        </div>
      </Card>
    </Container>
  </div>
</template>

<style scoped>
.img {
  height: 200px;
  width: 200px;
  max-width: 200px;
}

.logo-link {
  @apply px-2;
  transition: 0.2s ease-in-out all;
}

.logo-link:hover {
  transform: scale(1.05);
}

.logo {
  height: 100px;
  width: 100px;
  max-width: 100px;
}

.logo:active {
  transform: scale(0.9);
}
</style>