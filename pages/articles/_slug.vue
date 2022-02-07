<template>
  <div class="container max-w-screen-lg mb-2">
    <div class="mx-3">
      <img class="w-full rounded-b-md" :src="`/banner/${article.img}`" alt="Project Banner Image">
      <!-- <img class="w-full rounded-b-md" :src="`https://nizarbaihaqi.com/banner/${article.img}`" alt="Project Banner Image"> -->
    </div>
    <div>
      <div class="card">
        <div class="mt-6 mb-10">
          <h1 class="text-center">{{ article.title }}</h1>
          <p class="text-center">Updated : {{ formatDate(article.updatedAt) }}</p>
        </div>
        <article class="prose lg:prose-lg dark:prose-invert">
          <nuxt-content :document="article" />
        </article>
      </div>
    </div>
    <PrevNext :prev="prev" :next="next" />
  </div>
</template>

<script>
export default {
  head({$seoMeta}){
    return {
      title: this.article.title,
      meta: $seoMeta({
        title: this.article.title,
        description: this.article.description,
        image: `https://nizarbaihaqi.com/banner/${this.article.img}`,
        url: `https://nizarbaihaqi.com${this.article.path}`
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
    const article = await $content('articles', params.slug ).fetch()

    const [prev, next] = await $content('articles')
      .only(['title', 'slug'])
      .sortBy('createdAt', 'desc')
      .surround(params.slug)
      .fetch()

    return {
      article,
      prev,
      next
    }
  },
  scrollToTop: true
}
</script>
