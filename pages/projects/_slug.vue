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
      .sortBy('createdAt', 'desc')
      .surround(params.slug)
      .fetch()

    return {
      project,
      prev,
      next
    }
  },
  layout: 'project'
}
</script>

<template>
  <div class="container max-w-screen-lg mb-2">
    <div class="h-10 mb-3" />
    <div class="card">
      <div class="mt-6 mb-10">
        <h1 class="text-center">{{ project.title }}</h1>
        <p class="text-center">Published : {{ formatDate(project.createdAt) }}</p>
      </div>
      <article class="prose lg:prose-lg dark:prose-invert max-w-none">
        <nuxt-content :document="project" />
      </article>
    </div>
    <PrevNext :prev="prev" :next="next" />
  </div>
</template>
