<script>
export default {
  head () {
    return {
      link: [
        { rel: 'canonical', href: 'https://nizarbaihaqi.com' }
      ]
    }
  },
  async asyncData({ $content }) {
    const projects = await $content('projects')
      .sortBy('createdAt', 'desc')
      .fetch()

    return {
      projects
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

<template>
  <main>
    <article itemscope itemtype="https://schema.org/Article">
      <div class="flex h-screen">
        <header class="w-screen md:w-[50vw] mb-3 flex flex-col items-center justify-center">
          <figure>
            <img width="160" height="160" src="~assets/logo-light.svg" alt="logo" class="w-40" v-if="$colorMode.preference == 'light'" />
            <img width="160" height="160" src="~assets/logo-dark.svg" alt="logo" class="w-40" v-else />
          </figure>
          <h1 itemprop="name" class="font-bold my-4 px-10 text-center">Nizar Baihaqi</h1>
          <p class="italic mb-2 text-center">Vuejs Web Developer</p>
          <NuxtLink class="link" to="/about">
            See my details &#8599;
          </NuxtLink>
        </header>
        <div class="w-[50vw] hidden md:flex justify-center items-center">
          <div class="card p-0 w-3/5 overflow-hidden">
            <div class="bg-image" />
            <div class="py-2 px-3">
              <h3 class="border-l-2 pl-2 my-3 border-black dark:border-white">
                Todo App
              </h3>
              <div class="flex flex-col">
                <p>Simple todo app for everyone</p>
                <a href="https://todo-nuxt.herokuapp.com" class="link pt-2" target="_blank">App &#8599;</a>
                <a href="https://github.com/nqrz/todo-nuxt" class="link" target="_blank">Repo &#8599;</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h3 class="text-center dark:bg-night-purple py-3">My Projects</h3>
      <div class="max-w-screen-lg mx-auto lg:grid grid-cols-2">
        <div class="card" v-for="project in projects" :key="project.slug" link :url="project.path">
          <h3 class="text-center">{{ project.title }}</h3>
          <p class="text-center text-sm mb-1">{{ formatDate(project.createdAt) }}</p>
          <div class="flex justify-center gap-2">
            <p class="text-xs text-center inline-block mb-3" v-for="category in project.category" :key="category">
              {{ category }}
            </p>
          </div>
          <p>{{ project.description }}</p>
          <NuxtLink class="link" :to="project.path">
            Read &rarr;
          </NuxtLink>
        </div>
      </div>
    </article>
  </main>
</template>

<style scoped>
.bg-image {
  height: 250px;
  width: 100%;
  background-image: url(/img/homepage-todo-app.png);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-color: aqua;
}
</style>
