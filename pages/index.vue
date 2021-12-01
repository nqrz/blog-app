<template>
  <div>
    <Hero>
      <img src="~assets/logo-light-256x256.png" alt="logo" class="w-40 spin" v-if="$colorMode.preference == 'light'" />
      <img src="~assets/logo-dark-256x256.png" alt="logo" class="w-40 spin" v-else />
      <h1 class="font-bold my-4 px-10">Nizar Baihaqi</h1>
      <div>
        <h6>Counter: {{ counter }}</h6>
        <button class="btn rounded-md" @click="addCount">Add count</button>
      </div>
    </Hero>
    <h3 class="text-center mt-10">Project highlight</h3>
    <Container class="mb-6">
      <Card class="w-full md:w-7/12" :link="true" :url="projectHighlight.path">
        <h4 class="text-center">{{ projectHighlight.title }}</h4>
        <p class="text-sm mb-4">Updated at: {{ formatDate(projectHighlight.updatedAt) }}</p>
        <p>{{ projectHighlight.description }}</p>
        <NuxtLink class="link" :to="projectHighlight.path">
          Check &rarr;
        </NuxtLink>
      </Card>
      <Card class="w-full md:w-5/12 md:ml-6 mt-6 lg:mt-3">
          <h4 class="text-center ">🛠️ Tech stack</h4>
          <Logo :category="projectHighlight.category" />
      </Card>
    </Container>
    <h3 class="text-center my-8">Another Project</h3>
    <Container>
      <div class="block md:flex md:divide-x-2 divide-dashed divide-gray-700 dark:divide-white mb-4">
        <div v-for="project in projects" :key="project.updatedAt" class="w-full md:w-7/12 p-6" :link="true" :url="project.path">
          <h4 class="text-center">{{ project.title }}</h4>
          <p class="text-sm text-center mb-4">Updated at: {{ formatDate(project.updatedAt) }}</p>
          <p class="text-sm">{{ project.description }}</p>
          <NuxtLink class="link" :to="project.path">
            Check &rarr;
          </NuxtLink>
        </div>
      </div>
    </Container>
    <Container>
      <Me class="md:w-8/12" />
      <Contacts class="md:ml-6 md:w-4/12 mt-6 lg:mt-3"/>
    </Container>
  </div>
</template>

<script>
export default {
  async asyncData ({ $content }) {
    const [ projectHighlight ] = await $content('projects')
      .where({ highlight: true })
      .without(['body', 'toc'])
      .fetch()
    
    const projects = await $content('projects')
      .where({ highlight: false })
      .without(['body', 'toc'])
      .limit(3)
      .fetch()

    return {
      projectHighlight,
      projects
    }
  },
  computed: {
    counter () {
      return this.$store.state.counter
    }
  },
  methods: {
    addCount () {
      this.$store.commit('increment')
    },
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
