<template>
  <div class="mb-2">
    <Container>
      <img class="rounded-b-md" :src="`https://nizarbaihaqi.com/banner/${project.img}`" alt="Project Banner Image">
    </Container>
    <Container>
      <div>
        <Card>
          <div class="mt-6 mb-10">
            <h1 class="text-center">{{ project.title }}</h1>
            <p class="text-center">Updated : {{ formatDate(project.updatedAt) }}</p>
          </div>
          <article>
            <nuxt-content :document="project" />
          </article>
        </Card>
        <PrevNext :prev="prev" :next="next" />
      </div>
    </Container>
  </div>
</template>

<script>
export default {
  head({$seoMeta}){
    return {
      title: this.project.title,
      meta: $seoMeta({
        title: this.project.title,
        description: this.project.description,
        image: `https://nizarbaihaqi.com/banner/${this.project.img}`,
        url: `https://nizarbaihaqi.com${this.project.path}`
      }, false)
    }
  },
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
      .sortBy('updatedAt', 'desc')
      .surround(params.slug)
      .fetch()

    const author = await $content('profile', project.author).fetch()

    return {
      project,
      author,
      prev,
      next
    }
  }
}
</script>
