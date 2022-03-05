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
                <p>Wave portal with with blockchain integration</p>
                <NuxtLink to="/projects/wave-portal" class="link">Read more &#8599;</NuxtLink>
                <a href="https://nqrz-wave-portal.herokuapp.com" class="link mt-2" target="_blank">App &#8599;</a>
                <a href="https://github.com/nqrz/wave-portal" class="link" target="_blank">Repo &#8599;</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h3 class="text-center dark:bg-night-purple py-3">My Projects</h3>
      <ProjectCard :projects="projects" />
    </article>
  </main>
</template>

<style scoped>
.bg-image {
  height: 250px;
  width: 100%;
  background-image: url(/img/homepage-wave-portal.png);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-color: aqua;
}

.card-image {
  height: 200px;
  width: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-color: aqua;
}
</style>
