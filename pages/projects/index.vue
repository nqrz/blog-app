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
      category: [],
    }
  },
  async mounted() {
    this.projects = await this.$content('projects')
      .sortBy('updatedAt', 'desc')
      .fetch()
  },
  watch: {
    async searchQuery(searchQuery) {
      this.projects = await this.$content('projects')
        .search(searchQuery)
        .sortBy('updatedAt', 'desc')
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
  <div>
    <Hero>
      <p class="text-9xl mb-8">🏭</p>
      <h1 class="font-bold mb-4">Projects</h1>
      <h6>I will post here for my projects ❤️</h6>
      <WarnBox>
        Disclaimer: Some of these project maybe still in Development
      </WarnBox>
    </Hero>
    <Container>
      <div class="mx-auto pl-4 lg:pl-0">
        <input class="" v-model="searchQuery" autocomplete="off" placeholder="Full text search">
        <button class="btn rounded-md mt-2" @click="searchQuery = 'nuxtjs'">Nuxtjs</button>
        <button class="btn rounded-md" @click="searchQuery = 'tailwindcss'">Tailwindcss</button>
      </div>
    </Container>
    <Container class="mt-4">
      <div class="w-full lg:w-2/3">
        <h6 class="text-center">Newest updated project</h6>
      </div>
      <div class="w-1/3 hidden lg:block">
        <h6 class="text-center">Tech stack</h6>
      </div>
    </Container>
    <Container v-for="project in projects" :key="project.slug">
      <Card class="w-full lg:w-2/3" :link="true" :url="project.path">
        <h4 class="text-center">{{ project.title }}</h4>
        <div class="flex justify-center gap-2 lg:hidden">
          <p class="text-xs text-center inline-block" v-for="category in project.category" :key="category">
            {{ category }}
          </p>
        </div>
        <p class="text-sm mb-4">Updated at: {{ formatDate(project.updatedAt) }}</p>
        <p>{{ project.description }}</p>
        <NuxtLink :to="project.path">
          Check &rarr;
        </NuxtLink>
      </Card>
      <Card class="w-1/3 hidden lg:block ml-5">
        <Logo :category="project.category" />
      </Card>
    </Container>
  </div>
</template>