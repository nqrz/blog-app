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
  async asyncData ({ $content }) {
    const projects = await $content('projects')
      .sortBy('updatedAt', 'desc')
      .fetch()

    return {
      projects
    }
  },
}
</script>

<template>
  <div>
    <Hero>
      <p class="text-9xl mb-8">🏭</p>
      <h1 class="font-bold mb-4">Projects</h1>
      <h6>I will post here for my projects ❤️</h6>
      <code class="mt-2">Disclaimer: Some of these project maybe still in Development</code>
      <code>please be patient 👌</code>
    </Hero>
    <Container v-for="project in projects" :key="project.slug">
      <Card :link="true" :url="project.path">
        <h4 class="text-center">{{ project.title }}</h4>
        <p>{{ project.description }}</p>
        <NuxtLink :to="project.path">
          Check &rarr;
        </NuxtLink>
      </Card>
    </Container>
  </div>
</template>