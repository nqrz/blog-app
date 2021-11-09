<template>
  <div>
    <Hero>
      <img
        src="../assets/logo-aqua.svg"
        alt="Logo Nizar Baihaqi"
        class="w-28 mb-2"
      />
      <h1 class="font-bold mb-4 px-10">Welcome to my website</h1>
      <h6>“We’re not perfect, but we’re finding perfection”</h6>
    </Hero>
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
      <Card class="w-screen lg:w-8/12">
        <div class="block md:flex">
          <div class="lg:ml-2 flex justify-center">
            <img
              src="../assets/ijay.jpg"
              alt="Nizar Baihaqi"
              class="h-full w-1/2 md:w-full rounded-md"
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
                <i class="fab fa-github lg:ml-4"></i>
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
              <a
                target="_blank"
                href="https://instagram.com/abaihaaqi"
                class="flex items-center hover:text-blue-900"
              >
                <i class="fab fa-instagram ml-4"></i>
                <p class="ml-2">abaihaaqi</p>
              </a>
            </div>
          </div>
        </div>
      </Card>
      <Card class="lg:ml-6 w-screen lg:w-4/12 flex justify-center">
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
          <a target="_blank" href="https://dribbble.com/ijaybaihaqi">
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
