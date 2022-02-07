<template>
  <main>
    <article itemscope itemtype="https://schema.org/Article">
      <header class="banner mb-3">
        <figure>
          <img width="160" height="160" src="~assets/logo-light.svg" alt="logo" class="w-40" v-if="$colorMode.preference == 'light'" />
          <img width="160" height="160" src="~assets/logo-dark.svg" alt="logo" class="w-40" v-else />
        </figure>
        <h1 itemprop="name" class="font-bold my-4 px-10 text-center">Nizar Baihaqi</h1>
        <p class="italic mb-2 text-center">"Practice makes perfect"</p>
        <Arrow />
      </header>
      <h2 class="text-center">Projects</h2>
      <section itemprop="articleBody" class="container block md:flex">

        <!-- Article page -->

        <section itemprop="articleSection" class="card md:w-1/2">
          <figure>
            <img itemprop="image" width="80" height="80" class="h-20 mb-3 mx-auto" src="https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg" alt="Logo Vue">
          </figure>
          <h3 class="text-center">Article Page</h3>
          <p class="mb-2">Using Vuex and Nuxt Content</p>
          <NuxtLink class="link" to="/articles">Look &#8599;</NuxtLink>
          <a href="https://github.com/nqrz/nizarbaihaqi.com" class="link" target="_blank">Repo &#8599;</a>
        </section>

        <!-- Portofolio page -->

        <section itemprop="articleSection" class="card md:w-1/2">
          <figure>
            <img itemprop="image" width="80" height="80" class="h-20 mb-3 mx-auto" src="https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg" alt="Logo Vue">
          </figure>
          <h3 class="text-center">Todo app</h3>
          <p class="mb-2">Nuxtjs, Vuex, Supabase</p>
          <a href="https://todo-nuxt.herokuapp.com" class="link" target="_blank">Link &#8599;</a>
          <a href="https://github.com/nqrz/todo-nuxt" class="link" target="_blank">Repo &#8599;</a>
        </section>

      </section>
      <section class="container xl:grid grid-cols-2">
        <div itemscope itemtype="https://schema.org/author" class="card xl:flex">
          <figure class="flex justify-center items-center">
            <img itemprop="image"
              src="~/assets/ijay.jpg"
              alt="Nizar Baihaqi"
              class="rounded-full img"
            />
          </figure>
          <div class="xl:ml-6 flex flex-col justify-center">
            <h3 itemprop="name" class="font-semibold mb-2 text-center xl:text-left">
              Nizar Baihaqi
            </h3>
            <p itemprop="description">
              Hello, I’m Nizar Baihaqi, A Frontend Web Developer. My tech stack is Nuxtjs which is based on Vuejs and use Tailwindcss utilities for styling.
            </p>
            <NuxtLink class="link" to="/about">
              Read my details &rarr;
            </NuxtLink>
          </div>
        </div>
        <div class="sm:grid grid-cols-2">
          <IconCard heading="Social Media" :icons="socials" mini />
          <IconCard heading="Contacts" :icons="contacts" mini />
        </div>
      </section>
    </article>
  </main>
</template>

<script>
export default {
  head () {
    return {
      link: [
        { rel: 'canonical', href: 'https://nizarbaihaqi.com' }
      ]
    }
  },
  computed: {
    socials () {
      return this.$store.state.socials
    },
    contacts () {
      return this.$store.state.contacts
    },
  },
  methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('en', options)
    }
  },
}
</script>

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
