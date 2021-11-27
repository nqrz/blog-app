<template>
  <article>
    <Hero>
      <h1>{{ project.title }}</h1>
    </Hero>
    <Container>
      <div class="w-3/12">
        <Card class="sticky top-16 mb-9">
          <nav>
            <ul>
              <li v-for="link of project.toc" :key="link.id">
                <NuxtLink :to="`#${link.id}`">{{ link.text }}</NuxtLink>
              </li>
            </ul>
          </nav>
        </Card>
      </div>
      <div class="w-9/12 ml-4">
        <Card class="">
          <nuxt-content :document="project" />
        </Card>
        <PrevNext :prev="prev" :next="next" />
      </div>
    </Container>
  </article>
</template>

<script>
export default {
  async asyncData ({ $content, params }) {
    const project = await $content('projects', params.slug ).fetch()

    const [prev, next] = await $content('projects')
      .only(['title', 'slug'])
      .surround(params.slug)
      .fetch()

    return {
      project,
      prev,
      next
    }
    
  }
}
</script>