<template>
  <article>
    <Hero>
      <h1>{{ project.title }}</h1>
      <div class="flex gap-4">
        <div class="text-gray-300" v-for="category in project.category" :key="category">
          {{ category }}
        </div>
      </div>
    </Hero>
    <Container>
      <div class="w-3/12">
        <div class="sticky top-16 mb-9">
          <Card>
            <nav>
              <ul>
                <li v-for="link of project.toc" :key="link.id">
                  <NuxtLink :to="`#${link.id}`">{{ link.text }}</NuxtLink>
                </li>
              </ul>
            </nav>
          </Card>
          <Card>
            <div class="flex items-center">
              <img :src="`/${author.img}`" :alt="author.alt" class="rounded-full w-12">
              <p class="ml-2">{{ author.name }} - {{ author.slug }}</p>
            </div>
          </Card>
          <p class="text-center">Updated : {{ formatDate(project.updatedAt) }}</p>
          <Logo class="mt-4" :category="project.category" />
        </div>
      </div>
      <div class="w-9/12 ml-4">
        <Card>
          <nuxt-content :document="project" />
        </Card>
        <PrevNext :prev="prev" :next="next" />
      </div>
    </Container>
  </article>
</template>

<script>
export default {
  methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('en', options)
    }
  },
  async asyncData ({ $content, params }) {
    const project = await $content('projects', params.slug ).fetch()

    const [prev, next] = await $content('projects')
      .only(['title', 'slug'])
      .surround(params.slug)
      .fetch()

    const author = await $content('authors', project.author).fetch()

    return {
      project,
      author,
      prev,
      next
    }
  }
}
</script>