<template>
  <div>
    <Hero>
      <img src="~assets/logo-dark.svg" alt="logo" class="w-40" v-if="$colorMode.preference == 'light'" />
      <img src="~assets/logo-aqua.svg" alt="logo" class="w-40" v-else />
      <h1 class="font-bold my-4 px-10">Nizar Baihaqi</h1>
      <h6>Today is the day 🐣</h6>
    </Hero>
    <Container>
      <Card>
        <h4 class="text-center">🛠️ Skill set</h4>
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
    </Container>
    <h3 class="text-center my-4">Projects</h3>
    <Container>
      <Card :button="true" url="https://greialdy.netlify.app">
        <h4 class="text-center mb-4">😎 Landing Page</h4>
        <p class="mb-4">
          I created landing page that fit for portofolio, company profile, and
          many more. That needs an online professional profile for their career.
        </p>
        <p>(This is my friend request)</p>
      </Card>
    </Container>
    <Container>
      <Me class="lg:w-8/12" />
      <Contacts class="lg:ml-6 lg:w-4/12"/>
    </Container>
  </div>
</template>

<style scoped>
.spin {
  animation: spin 20s infinite linear;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
