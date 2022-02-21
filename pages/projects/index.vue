<script>
export default {
  head({$seoMeta}){
    return {
      title: 'Projects',
      meta: $seoMeta({
        title: 'Projects',
        description: 'This is where i post my projects 👌',
        url: 'https://nizarbaihaqi.com/projects'
      }, false)
    }
  },
  data() {
    return {
      searchQuery: '',
      projects: [],
      category: []
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
  watch: {
    async searchQuery(searchQuery) {
      this.projects = await this.$content('projects')
        .search(searchQuery)
        .sortBy('createdAt', 'desc')
        .fetch()
    },
  },
  methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('en', options)
    }
  }
}
</script>

<template>
  <div class="container max-w-screen-lg">
    <h1 class="text-center pt-20">Projects</h1>
    <p class="text-center mb-2">This page uses <a href="https://content.nuxtjs.org" class="link" target="_blank" rel="noopener noreferrer">@nuxt/content &#8599;</a></p>
    <div class="mb-10">
      <div class="max-w-screen-sm mx-auto p-3">
        <input class="w-full " v-model="searchQuery" autocomplete="off" placeholder="Full text search">
      </div>
      <div class="mx-auto w-max">
        <button class="btn rounded-md" @click="searchQuery = 'nuxtjs'">Nuxtjs</button>
        <button class="btn rounded-md" @click="searchQuery = 'tailwindcss'">Tailwindcss</button>
        <button class="btn rounded-md" @click="searchQuery = 'vuex'">Vuex</button>
      </div>
    </div>
    <div v-if="projects[0] === undefined" class="max-w-screen-sm mx-auto">
      <WarnBox class="mx-2">
        There's no project match.
      </WarnBox>
    </div>
    <h2 v-else class="text-center">Newest project</h2>
    <div class="lg:grid grid-cols-2">
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
  </div>
</template>